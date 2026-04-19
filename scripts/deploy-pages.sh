#!/usr/bin/env bash
# Builds the static export and publishes it to the gh-pages branch of the
# presentation remote. No GitHub Actions — one script, one push.
#
# Usage:   npm run workshop:deploy
# Prereqs: GitHub Pages set to "Deploy from a branch" → gh-pages / root
#          in Settings → Pages of nayaunity/blackistechpresentation.

set -euo pipefail

REMOTE="${DEPLOY_REMOTE:-presentation}"
BRANCH="gh-pages"
WORKTREE_DIR=".gh-pages-worktree"

cleanup() {
  if [ -d "$WORKTREE_DIR" ]; then
    git worktree remove --force "$WORKTREE_DIR" >/dev/null 2>&1 || true
  fi
}
trap cleanup EXIT

echo "→ Building static export..."
GITHUB_PAGES=1 npm run build

echo "→ Preparing $BRANCH worktree..."
if git show-ref --verify --quiet "refs/heads/$BRANCH"; then
  git worktree add "$WORKTREE_DIR" "$BRANCH"
else
  git worktree add --orphan -B "$BRANCH" "$WORKTREE_DIR"
fi

echo "→ Syncing out/ into worktree..."
find "$WORKTREE_DIR" -mindepth 1 -maxdepth 1 ! -name ".git" -exec rm -rf {} +
cp -R out/. "$WORKTREE_DIR/"
touch "$WORKTREE_DIR/.nojekyll"

echo "→ Committing..."
cd "$WORKTREE_DIR"
git add -A
if git diff --cached --quiet; then
  echo "No changes to deploy."
  exit 0
fi
git commit -m "Deploy: $(date -u +%Y-%m-%dT%H:%M:%SZ)"

echo "→ Pushing to $REMOTE/$BRANCH..."
git push -f "$REMOTE" "$BRANCH"

echo ""
echo "Done. Pages should publish at:"
echo "  https://nayaunity.github.io/blackistechpresentation/workshop/"
