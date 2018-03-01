//This document outlines the protocol for making a git repository.
//We will also be using this document to test our ability to successfully merge files in Git!
//Once we have all added our names to this file using version control, we can feel confident that our protocol makes sense!


/*

*****INITIAL SETUP FOR FORKING REPOSITORY*****

Step 1: Fork this repository. Click the "fork button" to create a remote copy of this branch in your Github account. By clicking "fork" you will create a new repository at https://github.com/<YOUR-GITHUB-USERNAME>/github-protocol.

Step 2: Go to https://github.com/<YOUR-GITHUB-USERNAME>/github-protocol. Click the "Clone or Download" green button. This will bring up a url that you can click to copy. In your terminal, navigate to area you want to store your forked project, such as your Desktop. Click git clone https://github.com/<YOUR-GITHUB_USERNAME/github-protocol.git (the link to the left just has a placeholder username, your actual link will have your username).

Congratulations, you have successfully forked the repo and are ready to start making contributions!

*****HOW TO CONTRIBUTE YOUR CHANGES*****

Basic philosophy of our git protocol:
    1) The master remote branch is never broken. Changes are only merged after being tested.
    2) Nobody works off of their local master branches. All changes are made in individual feature branches.
    3) Local and remote forked master branches are kept up-to-date. Before creating a new branch in your local repository, 
    pull in the latest changes from the main master.


Before going any further, let's quickly review where the version control for Github resides. At this point, there are three different repos that you need to be thinking about. There is the master remote branch at https://github.com/Ihmoda/github-protocol. There is your fork of this branch at https://github.com/<YOUR-GITHUB-USERNAME>/github-protocol. There is also a local copy of the repo within your machine where you cloned the repo.

Step 1) Ensure that your local and remote forked master branches are up-to-date with the latest master. It's good practice to try to keep your forked master branch as up-to-date as possible. While this isn't always possible, it's definitely helpful and will help minimize merge conflicts. In order to do this, we need to establish some connection with the remote master branch (in this case, the remote master resides at https://github.com/Ihmoda/github-protocol).

****STOP****
If you have already established a remote connection by following these step, just run git pull upstream master and then skip to step #2.
****STOP****

If you type git remote -v you should see something like this:

origin	https://github.com/<YOUR-GITHUB-USERNAME>/github-protocol.git (fetch)
origin	https://github.com/<YOUR-GITHUB-USERNAME>/.git (push)

This shows us that we have access to our forked remote branch ('origin'). We now need to establish a connection with the actual master branch so that we can pull down the latest changes. To do this, we use "git remote add" command: 

  run "git remote add upstream git://github.com/<ORIGINAL-DEV-USERNAME>/<REPO-YOU-FORKED-FROM>.git".

With this command, we are adding a new remote connection and naming that connection "upstream". You can actually name this connection anything you want, but calling it upstream is helpful. Type git "remote -v". If you did this correctly, you should see something like this:

origin	https://github.com/Ihmoda/github-protocol-fork.git (fetch)
origin	https://github.com/Ihmoda/github-protocol-fork.git (push)
upstream	https://github.com/Ihmoda/github-protocol.git (fetch)
upstream	https://github.com/Ihmoda/github-protocol.git (push)

Now that we have a connection to the upstream master, we can pull from it. Run git pull upstream master. You should now have the latest changes from the master and are ready to begin adding features. 

*****IMPORTANT*****

You do not need to add the remote upstream more than once. Once you have added it, you will have a connection to the master remote branch on your local forked repository. Just remember to run git "pull upstream master" before creating a new feature branch.

Step 2) Make a new feature branch within your local repository. To do this, type "git checkout -b <FEATURE-BRANCH-NAME>". This command does two things, 1) it creates a new branch and moves you onto that branch. Use git branch to see if you have changed branches. If you have done this correctly, you will see two branches in your command line and there will be an asterisk next to <FEATURE-BRANCH-NAME> after running git branch. See below: 

* FinishProtocol
  master

Step 3) Make your changes. Pretty self-explanatory, just write the code that you want to write.

Step 4) Stage and commit your changes. Use "git add ." to stage your files and "git commit -m '<YOUR-MESSAGE-DESCRIBING-CHANGES>'" to commit your changes.

Step 5) So we have made changes in our local feature branch and commited those changes. The next thing to do is to push those changes to our remote forked repository (in this case https://github.com/<YOUR-GITHUB-USERNAME>/github-protocol). To do this we can use the command "git push --set-upstream origin <FEATURE-NAME>". Note, if you type "git push" Github will give you this command and you can copy paste it into the terminal so you don't have to remember it.

*****NOTE*****
At this point, we could just go to our remote branch and click "new pull request" to make a pull request to the remote master (for this example the remote master is https://github.com/Ihmoda/github-protocol). However, it's much easier to use VS Code to resolve merge conflicts. It's also much safer to resolve merge conflicts on a local branch. The following steps will outline how we can resolve merge conflicts locally before submitting a pull request.

Before moving on, let's quickly review what a merge conflict is. A merge conflict occurs when two different branches are asking to modify the same line of the same file. When this happens, Git doesn't know which changes to apply and you must look through all of the conflicts and decide what to do.

Step 6) Run "git pull upstream master." If this doesn't work, refer to step #1 to make sure you have added the main remote repo as an upstream branch. Running this command will pull in any new changes from the main project master branch into your local branch.

Step 7) Running step #6 can introduce merge conflicts, but don't worry, it's not as bad as it sounds. If you don't get conflicts, then you can go ahead and submit a pull request. When conflicts do occur, VS Code has built in tools to help you resolve merge conflicts. Go to each file marked red in your sidebar and decide whether to keep changes, keep incoming changes, or keeep both (VS code will give you these options in areas where the code has overlapped). After the conflicts have been resolved and you are satisfied with the code run git add ., git commit, and git push to save your changes.

Step 8) Submit a pull request to the main master project branch. It's now time to submit a pull request. To the main master branch. If you did everything correctly the pull request will have no merge conflicts and you will be able to easily merge.

*/

var contributors = ["Omar Ihmoda", "Arin Halicki"];
