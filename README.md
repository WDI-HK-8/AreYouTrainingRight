# AreYouTrainingRight

# Introduction
AreYouTrainingRight is a web-base self assessment app that measures the effectiveness of your training routine in reaching your fitness goals. 

### Game Rules
1. Click the start button on the home page to start the assessment!
2. Choose your fitness goal from the three options provided (Get Lean!, Get Big! or Get Strong!)
3. Input your weekly training schedule using the dropdown lists provided - be honest!
3. Click "Calculate my result" to receive your effectiveness score and advice for improvements.
4. After reading your advice, press the "Go back to training" to change your training regime and check your score again!

### Technologies used
GIT for version control
HTML5/CSS3/JavaScript/jQuery/Bootstrap
Bower dependancy management

### Design approach
From an asthetic point of view, the app contains simple one page structure with clearly defined sections. The UI is simple and intuitive, requiring minimal instruction with buttons to advance clearly visible and labeled. 

The app will first ask the user what their primary fitness goal is. Based off which button they press, this will modify the values of the different forms of training the the hash, based on on its effectiveness in acheiving the goal.

The user is then prompted to add what their weekly training regime is. Once added, the user hits "calculate my score" which will sum the values of the training methods inputed, turn the value into a percentage and based off this percentage, populate an advice section.

### Installation instructions
1.Fork this repo!

2.Initialise a repo on a local directory
```sh
$ git init
```
3.Intialise bower
```sh
$ bower init
```
4.Clone the repo
```sh
$ git clone [origin url]
```
### Unsolved problems / Upcoming features
There are several features in the pipeline to be added:
1. The functionality for users to enter their current diet which will then also be used in their effectiveness assessment.
2. More fitness goals and workout options
3. More personalised tips in the final results page based on their inputed information. 

There are two problems that are ongoing:
1. Some of the objects aren't responsive and therefore cause issue on different resolutions.
2. When you click the "remove training session" button it currently removes the final index of the array where values are stored(array.pop()). This works if the user clicks on the last training session that they have added (which would be the case 80% of the time) however, if they remove a different training session it will still remove the value from the last array, not the corresponding value. 

### Author contact information
richie.bostock08@gmail.com
