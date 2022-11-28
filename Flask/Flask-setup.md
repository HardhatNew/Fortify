## Mini-guide to download and setup Flask for our purpose (VS Code)

---

### VSCode or any other IDE
<br />
If using VS Code, get the python extension. 

--- 

### Installing Python
To run a python script you need to install python. Let's [download](https://www.python.org/) python. I installed verison 3.11.0.

**During installation select the box to "Add Python to PATH".**

If you missed this step, You can check the location by running path at the command prompt. If the Python interpreter's folder isn't included, open Windows Settings, search for "environment", select Edit environment variables for your account, then edit the Path variable to include that folder. 

---

### Verify the Intallation
To check the python version run this in cmd
```shell
python --version
```
To check the pip version 
```shell
pip --version
```
![Verifying installation on CMD](https://user-images.githubusercontent.com/64247066/203861060-a9f1b213-f797-42b9-907e-76fd129d0d16.jpg "Veryfing installation on CMD")

---

### Creating the virtual Environment
- Create a folder in your desired location. Name it as environment (E.g. Flask_Dev_Environment)
- Open the folder in VSCode. 
- Open Terminal in VSCode and run the follwing two lines to create the virtual environment.

1. Creating 
```shell
py -3 -m venv .venv
```
2. This will activate the envrionment. 
```shell
.venv\scripts\activate
```
![Creating and entering venv in VSC](https://user-images.githubusercontent.com/64247066/203861264-157519ad-9878-4ff0-9ad0-7148990e910a.jpg "Creating and entering virtual environment")

- Choose your interpreter by going into the command palette (ctrl+shift+p). Then under Python: Select Interpreter. **Only Choose the option that starts with .venv**


![Selecting interpreter in VSC](https://user-images.githubusercontent.com/64247066/203861391-ee7c7de3-c210-4bc8-ace2-a571af1fb793.jpg "selecting interpreter")
---

### Installing Flask in the Environment
<br />

In the VSC Terminal run these commands
```shell
python -m pip install --upgrade pip
```
And then 
```shell
python -m pip install flask
```
VS Code activates the environment automatically when you use Terminal: Create New Terminal. If you open a separate command prompt or terminal, activate the environment by running  (for Windows). 

```shell
.venv\Scripts\Activate.ps1
```
You can check if the environment is activated when the command prompt shows (.venv) at the beginning.
![Proof of working in env](https://user-images.githubusercontent.com/64247066/203861474-ada1c5b4-cb8a-44b1-9111-bf4bc0719911.jpg "proof of working in venv")

## We are now done setting up. We can start coding in this virtual environment to design the web-app and build the MVP. 

For more reference, please see the following links. 
1. https://code.visualstudio.com/docs/python/tutorial-flask
2. https://www.youtube.com/watch?v=GHvj1ivQ7ms&t=220s&ab_channel=CodeVoid
3. https://www.youtube.com/watch?v=uxZuFm5tmhM&t=102s&ab_channel=AmitThinks
4. https://www.youtube.com/watch?v=mqhxxeeTbu0&ab_channel=TechWithTim
