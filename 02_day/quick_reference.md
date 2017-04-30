# <img src="https://avatars3.githubusercontent.com/u/24928792?v=3&s=200" width="30px"> Quick Reference

Some of the commands we went over yesterday in the terminal and in making references to other files can be confusing and difficult to remember. Here's a quick reference for some of the common commands.

## Terminal navigation

- Change back to the parent directory: `cd ..`
- Change into a child directory: `cd <directory name>`
- Make a new directory: `mkdir <new directory name>`
- Make a new file: `touch <new file name>`
- Open current directory in finder: `open .`

## Relative Paths

When referencing other files in your project, you use *relative paths* as opposed to *absolute paths* (URLs are absolute paths for content on the web). When figuring out the relative path, it's important to remember that `.` means *this current directory*, and `..` means one directory up. Directory and file names should be separated by `/` in a relative path.

## Git Commands

- To check if there are untracked changes: `git status`
- To add untracked changes to the staging area:
  - `git add -A` to add **all** of the changes in the current repo
  - `git add .` to add all of the changes in the current *directory*
  - `git add <file name>` to add changes to one specific file
- To commit changes that have been added: `git commit -m "some message"`
- To add and commit changes in one step (only works on *modified files*, not *new files*): `git commit -am "some message"`
- To push your commit from your *local* repo to your *remote* repo on GitHub: `git push origin master` *The last two words in this command can change depending on the name of your remote and the name of your working branch