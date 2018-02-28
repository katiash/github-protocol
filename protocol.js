//This document outlines the protocol for making a git repository.
//We will also be using this document to test our ability to successfully merge files in Git!
//Once we have all added our names to this file using version control, we can feel confident that our protocol makes sense!


/*

*****INITIAL SETUP FOR FORKING REPOSITORY*****

Step 1: Fork this repository. Click the "fork button" to create a remote copy of this branch in your Github account. By clicking "fork" you will create a new repository at https://github.com/<YOUR-GITHUB-USERNAME>/github-protocol.

Step 2: Go to https://github.com/<YOUR-GITHUB-USERNAME>/github-protocol. Click the "Clone or Download" green button. This will bring up a url that you can click to copy. In your terminal, navigate to area you want to store your forked project, such as your Desktop. Cilck git clone https://github.com/<YOUR-GITHUB_USERNAME/github-protocol.git (the link to the left just has a placeholder username, your actual link will have your username).

Step 3: Congratulations, you have successfully forked the repo and are ready to start making contributions!

*****HOW TO CONTRIBUTE YOUR CHANGES*****

Basic philosophy of our git protocol:
    1) The master remote branch is never broken. Changes are only merged after being tested.
    2) Nobody works off of master branches. All changes are made in individual branches.
    3) Master branches are kept up-to-date. Before creating a new branch in your local repository, pull in the latest changes from the master.


Step 1) Make a new feature branch within your local repository. To do this, type git checkout -b <FEATURE-BRANCH-NAME>. This command does two things, 1) it creates a new branch and moves you onto that branch. Use git branch to see if you have changed branches. If you have done this correctly, you will see two branches in your command line and there will be an asterisk next to <FEATURE-BRANCH-NAME> after running git branch.

Step 2) Make your changes. Pretty self-explanatory, just write the code that you want to write.

Step 3) Stage and commit your changes. Use git add . to stage your files and git commit -m "<YOUR-MESSAGE-DESCRIBING-CHANGES>" to commit your changes.

Before going any further, let's quickly review where the version control for Github resides. At this point, there are three different repos that you need to be thinking about. There is the master remote branch at https://github.com/Ihmoda/github-protocol. There is your fork of this branch at https://github.com/<YOUR-GITHUB-USERNAME>/github-protocol. There is also a local copy of the repo within your machine where you cloned the repo.

Step 4) So we have made changes in our local feature branch and commited those changes. The next thing to do is to push those changes to our local repository. 


*/

var contributors = [];