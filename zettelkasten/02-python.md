---
slug: python
title: Python Environments
description: A quickstart to using and managing Python environments
published: 11/24/2021
last_update:
    date: 1/26/2022
---

# Python Environments

Python has a nice progressive learning curve. It can be used in many ways, for many things. From quickly opening a dataset, and visualising it to writing heavy processing algorithms to running web-applications. Python could be your weapon of choice.

A downside about Python is managing dependencies and conflicts between package versions. As libraries/packages mature, they tend to deprecate some features or mutate them. Making compatibility across package versions tricky. The best way to resolve this is to use a virtual environment. A virtual environment neatly bundles all the packages for your project with its compatible dependencies.

So, here is my cheatsheet for managing Python environments. Most of the time I forget some of these commands and I need to scavenge the web for a particular command. So, I decided to put together a knowledge base here for my own reference.

:::caution

These commands were tested on a mac.

:::

## venv

Let's start with `venv`. It comes pre installed in Python (3.5+). To create a virtual environment folder with name `ENV_NAME` inside your project folder, use the following command:

```shell
python -m venv ./ENV_NAME
```

I prefer installing all my virtual environments into a folder (example `venv`) at the root of my system inside a folder with the name of the project.

```shell
python -m venv ~/venv/PROJECT_NAME
```

To activate the environment, you need to source it by running the command:

```shell
source ./ENV_NAME/bin/activate
```

And, I always run this afterwards, since most of my projects depend on them.

```shell
pip install --upgrade pip
pip install wheel
```

The other problem of managing environments is also managing different versions of Python. And I find the best way to solve this along with virtual environments is to use `pyenv`.

## pyenv

`pyenv` manages the installation of different versions of Python and also the different virtual environments.

On a mac, installation of `pyenv` is done using `brew`:

```shell
brew install pyenv
brew install pyenv-virtualenv
```

After the installation, you will be instructed to add the following to the `~/.bashrc` if you are using bash for your terminal or add it to `~/.zshrc` if you are using zsh for your terminal (zsh is the new standard for macOS).

```shell
# add to ~/.zshrc
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
```

Installing a version of Python to your system is done by

```shell
pyenv install VERSION_NUMBER_OR_NAME
```

To list all the available versions of Python that can be installed, run this command

```shell
pyenv install --list
```

To create a virtual environment, you can sue the command

```shell
# creating a virtual environment
pyenv virtualenv PYTHON_VERSION ENVIRONMENT_NAME
```

To activate or deactivate a virtual environment you can use

```shell
# activate or deactivate a virtual environment
pyenv activate ENVIRONMENT_NAME
pyenv deactivate
```

To list all the virtual environments and the Python versions installed in `pyenv` you'd use

```shell
# lists all virtual environments and Python versions
pyenv versions

# list all pyenv virtual environments
pyenv virtualenvs
```

Coming to the best part of `pyenv` is the ability to set the local and global Python version, this can be set so that opening a terminal in a folder will automatically activate the virtual environment.

```shell
# setting for global
pyenv global ENVIRONMENT_NAME_OR_PYTHON_VERSION

# setting for local, for a folder/project
pyenv local ENVIRONMENT_NAME_OR_PYTHON_VERSION
```

To delete a virtual environment, you'd use this

```shell
# delete a virtual environment
pyenv virtualenv-delete ENVIRONMENT_NAME

# this also work
pyenv uninstall ENVIRONMENT_NAME
```

## and more...

There are several other Python project management tools. One that interests me is `Poetry`. It helps with all of the above, and helps with managing multiple environments (dev, test, prod) for a particular project along with the ability to build and publish a package.
