#!/usr/bin/env sh
git checkout dev

#文件状态是否改变，改变数量是否大于 0
if test -n `git status --procelain`; then
  echo 'Unclean working tree. Commit or stash changes first.' >&2;
  exit 128;
fi

#执行 fetch 时是否出错，错误写入到 /dev/null
if ! git fetch --quiet 2>/dev/null; then
  echo 'There was a problem fetching your branch. Run `git fetch` to see more...' >&2;
  exit 128;
fi

#分支提交数量对比，origin 领先 HEAD 的提交数量，为0的话，则远程分支与本地分支保持一致，否则，需要git pull
if test "0" != `git rev-list --count --left-only @{u}...HEAD`; then
  echo Remote history differ. Please pull changes.' >&2;
  exit 128;
fi

echo 'No conflicts' >&2;
