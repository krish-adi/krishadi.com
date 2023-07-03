---
slug: greppo-introduction
title: Greppo introduction
description: Build a geospatial dashboard in Python using Greppo
published: 2/24/2022
last_update:
    date: 2/24/2022
tags: [greppo, demo, tutorial]
---

import GitHubGist from "../../components/GitHubGist";

# Build a geospatial dashboard in Python using Greppo

_February 24, 2022_

> **Lack of frontend, backend and web-dev experience can be limiting in making a web-app in Python. Not anymore…**

<figure>

![Demo GIF](https://miro.medium.com/max/1400/1*roDG3MBZhff1om23mZmU1w.gif)

<figcaption>
Figure: A geospatial dashboard built using Greppo in Python. Image by author.
</figcaption>
</figure>

Geospatial data analytics have become a common place in data science. Beyond mapping and visualisations, it broadly consists of extracting knowledge by detecting & recognising patterns, and building models for making predictions. Python remains to be a standard among data science, and is no different for geospatial data science. The communities backing projects like [GeoPandas](https://github.com/geopandas/geopandas), [Shapely](https://github.com/shapely/shapely) and [Rasterio](https://github.com/rasterio/rasterio), have made Python a go-to for geospatial analytics.

As a data scientist, it is common to work with multiple stakeholders including non-technical ones. The power to distill your research outcomes into a non-technical narrative comes in very handy. It all comes down to communicating how the outcomes could benefit the stakeholders. Creating a dashboard for your Python script is an effective method of story telling. A dashboard also comes in handy when you want to share your work to external stakeholders, limiting them with only the interaction and visualisation, without sharing the internal workings.

---

**Greppo: A quick and easy way to build geospatial dashboards.**

---

## Greppo

Greppo is an open-source Python framework for building geospatial web-apps. It provides ready to use frontend and backend components as functions that act as an API between the frontend interactive component and the bound backend variable. To understand more about the mental-model refer to this [page](https://docs.greppo.io/mental-model.html).

**TL;DR: without much frontend, backend, web-dev experience you can build and deploy a fully functional web-application with basic Python in under 5 minutes.**

-   GitHub repository: [https://github.com/greppo-io/greppo](https://github.com/greppo-io/greppo)
-   Documentation: [https://docs.greppo.io/](https://docs.greppo.io/)
-   Website: [https://greppo.io/](https://greppo.io/)

> In this tutorial we will be building a geospatial dashboard in Python using Greppo. We will work through setting up the environment, installation, importing data, putting in the components for our dashboard and serving it. You will be required to know the basics of Python, GeoPandas and geospatial analytics.

## Getting started…

The first thing to do is install Python and setup your Python environment. For those who are new to this, check out this [**_blog post_**](https://krishadi.com/zettelkasten/python.html) to help you get started on python environments. Once you are ready with that, let’s install our dependencies.

```shell
$ pip install greppo geopandas
```

Download the dataset that you require for this tutorial. All the data and the code for this tutorial can be found here in this GitHub repository: [greppo-demo/vector-demo](https://github.com/greppo-io/greppo-demo/tree/main/vector-demo) (Data source: [https://github.com/openpolis/geojson-italy](https://github.com/openpolis/geojson-italy))

## Scripting the dashboard

We start with setting up the folder structure for the project. I will be using the following project folder structure:

```shell
└── vector-demo
    ├── app.py
    ├── cities.geojson
    ├── regions.geojson
    └── roads.geojson
```

Let’s create the Python script for the dashboard. The code for the app goes into **_app.py_**.

**Step 0: Serving the app**

To run and serve the app, open a terminal and follow these instructions. First, change directory (`cd`) into the project folder `vector_demo`. Once inside, activate your Python environment where you have `greppo` installed. I am using pyenv here in the example. To then run the app, all you need to do is run `greppo serve app.py` command. The command `serve`, starts the server and compiles the code inside the `app.py`, which can be renamed to any file.

:::note

Be sure to be inside the project folder where the app.py is, or use a relative folder structure such as `greppo serve ./vector-demo/app.py`.

:::

<figure>

![Greppo CLI](https://miro.medium.com/max/1400/1*In8t7r2-YJ63ZMkf4Cg7-Q.png)

<figcaption>
Figure: Running and serving the app from the terminal. Image by Author.
</figcaption>
</figure>

You will then see the Uvicorn server running at a specified location. Copy and paste the address in your browser. Which will then load the app. If you have made any changes to the `app.py` , just save the changes and reload the web-app page. Where you will see the updated changes to your app.

**Step 1: Build the basic scaffolding for the app.**

Which is to import the `greppo` package and to add the `base_layer` to the map.

<GitHubGist id="c261a0f21e33e0df5fb80627df252d66" />

You need to first `import app` from `greppo` . This `app` object will serve as the interface to to your application frontend and provide the API for 2 way communication between the front and the back-end.

<figure>

![Greppo Layer Toggle](https://miro.medium.com/max/1400/1*TZh-0l2EpyzniAWrvCMF1A.png)

<figcaption>
Figure: Result from Step 1. Using the controls marked in red to toggle. Image by Author.
</figcaption>
</figure>

To add a `base_layer` to your application map, just use the app API method `app.base_layer()` with the required arguments. Refer to the [documentation](https://docs.greppo.io/) for what is required and what is optional. The `base_layer` method provides two ways to specify the base tile layer. One is to use the `name` and `url` attributes. The other method is to use the name of a `provider`. Greppo uses [xyzservices](https://xyzservices.readthedocs.io/en/stable/) under the hood for this. For a list of the provider names, check out this list [here](https://xyzservices.readthedocs.io/en/stable/introduction.html).

:::note

The provider name should be complete with its type/variety as in `CartoDB Positron` or `OpenStreetMap Mapnik` .

:::

**Step 2: Import the dataset and display it as an overlay.**

Using `geopandas` we can import the vector dataset as a `GeoDataFrame`. This can then be visualised on a map on the web-application using the `app.vector_layer()` method.

Here I am importing three different datasets one each having `polygons` (boundaries of the different regions of Italy), `lines` (major highways in Italy) and `points` (major cities of Italy).

<GitHubGist id="34ee2fe8e60f6b0f51f33609aae283d9" />

Using the method `app.vector_layer()` as an API to the frontend we can display the vector data. You are required to pass in the `name` and the other parameters are optional. Although, passing in the `color` or `fillColor` to the `style` is a good practise to differentiate and identify each layer. Since the frontend is based on [Leaflet](https://leafletjs.com/), all the styling is accordance to the leaflet’s specification and can be found in the [documentation](https://docs.greppo.io/map-components/vector-layer.html#styling-option-adopted-from-leaflet).

<figure>

![Greppo Control Toggle](https://miro.medium.com/max/1400/1*fy8xEkHSw1NKGhix7j1nFA.png)

<figcaption>
Result from Step 2. Using the controls marked in red to toggle.
</figcaption>
</figure>

You can find all the information of the vector_layer and the styling [here](https://docs.greppo.io/map-components/vector-layer.html).

:::note

You could also make a Choropleth map. Documentation of which can be found [here](https://docs.greppo.io/map-components/vector-layer.html#choropleth).

:::

**Step 3: Displaying in-app text, app-title and app-description**

For the web-application to be useful, it needs to carry some text to provide some guidance and context to its users. These could be displayed on the sidebar next to the components. Using the method `app.display()` markdown text can be displayed on the web-app. Using the same method, the **title** and **description** of the app can be set.

<GitHubGist id="07300a5997971d986c34afd014ada139" />

The `app.display()` takes in two arguments `name` and `value` . While `value` caries the text to be displayed, `name` has to be unique and carries the identifier to the text. If `name=’title’` the value passed is the title of the app and if `name=’description’` the value passed is the description of the app. Without any of the two, the app carries its default title and description. It is encouraged to set the title and description of the app.

<figure>

![App info](https://miro.medium.com/max/1400/1*eKievRGQTB40AVjaD8QGjw.png)

<figcaption>
Result from Step 3. Using the controls marked in red to toggle. Image by Author.
</figcaption>
</figure>

**Step 4: Displaying data as a chart**

A data app is hardly without display of data as a chart. Greppo also lets you display data as charts. Information of the charts and their usage can be found in the [documentation](https://docs.greppo.io/chart-components/index.html). Here, as an example a bar-chart is presented, `app.bar_chart()`.

<GitHubGist id="059b33754a70293e54079b78765ad430" />

The required arguments for the charts are the `name`, `x` and `y` values. A `description` and a `color` could be added to give the app user a better context. The `name` and `description` are displayed along with the chart.

<figure>

![Full app layout](https://miro.medium.com/max/1400/1*UhS3hSF0Q0p6f2LJ4S-mtQ.png)

<figcaption>
Result from Step 4. With the data, display features, charts and control. Image by Author.
</figcaption>
</figure>

## Conclusion

Let’s take complete run through what we’ve done here. Our goal was to create a geospatial web-app using Greppo, to display some GIS vector data, and add components to give the user of the app a better context. Here is the complete code for the app:

<GitHubGist id="dd4ce146785554f6515f49d192e3f2fe" />

And here the output of the app:

<figure>

![Geosaptial dashboard built using greppo.](https://miro.medium.com/max/1400/1*roDG3MBZhff1om23mZmU1w.gif)

<figcaption>
The final result. Image by Author.
</figcaption>
</figure>

So, there we have it. A complete web-app built using Greppo, in under 5 mins.

All the files for this demo can be found here: [https://github.com/greppo-io/greppo-demo/tree/main/vector-demo](https://github.com/greppo-io/greppo-demo/tree/main/vector-demo)

_Originally posted in [Towards Data Science](https://towardsdatascience.com/build-a-geospatial-dashboard-in-python-using-greppo-60aff44ba6c9)._
