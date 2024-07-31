---
slug: gee-greppo
title: Google Earth Engine and Greppo
description: Geospatial app with Google Earth Engine and Greppo
published: 3/20/2022
last_update:
    date: 3/20/2022
tags: [greppo, gee, demo, tutorial]
---

import GitHubGist from "../components/GitHubGist";

# Geospatial app with Google Earth Engine and Greppo

_March 3, 2022_

> **Using Google Earth Engine without a lot of JavaScript experience is hard. Greppo lets you overcome this in Python.**

<figure>

![Final web app](https://cdn-images-1.medium.com/max/1600/1*HwMJZVVFtFmmrpWokqmoxg.gif)

<figcaption>
Figure: The final web-app using Greppo and GEE. Image by author.
</figcaption>
</figure>

Google Earth Engine is an amazing tool in a data scientists toolbox for working with geospatial data. However, building a web-app with the GEE code editor requires a steep learning curve. The JavaScript based app-creator requires a large investment of time for data scientists who are solely Python developers

Greppo is the perfect tool to bridge this gap.

> In this blog post I will be building a web-application with Greppo with a a popular GEE use-case with DEM(Digital Elevation Model). I will walk you through understanding the basics of GEE, the client-server model, how the API works and the GEE data model. With that background, the post will use Greppo to create an app using GEE’s Python interface and highlight Greppo’s mental model and easy to use interface.

:::info

All the code here is in Python. They are ported from the GEE’s sample JavaScript code in the [documentation](https://developers.google.com/earth-engine/guides?hl=en)

:::

## Getting started

Before we get started, you need to get access to Google Earth Engine. Follow the instruction [here to signup](https://earthengine.google.com/signup/) and get access.

Here is a quick tutorial on Greppo and how to use it: [Build a geospatial dashboard in Python using Greppo](https://towardsdatascience.com/build-a-geospatial-dashboard-in-python-using-greppo-60aff44ba6c9)

Next, let’s setup our Python environment to install the dependencies. To understand what Python environments are and how to set it up, [read this](https://krishadi.com/zettelkasten/python.html). Install the following packages into the Python environment.

```
$ pip install earthengine-api greppo
```

The code for the web-app will go into **_app.py,_** and the app is served and run through the command line using the command `greppo serve app.py` .

:::note

To run the `greppo` command in the command line, you need to activate the python environment where greppo is installed. The file app.py can be renamed to anything, but be sure to be in the folder when you run the command `greppo serve app.py` or in a relative folder structure `greppo serve /demo/folder/app.py` .

:::

Greppo’s GitHub repository: [https://github.com/greppo-io/greppo](https://github.com/greppo-io/greppo)

For any issues reach out to us on [GitHub](https://github.com/greppo-io/greppo) using ‘issues’ or in the [Discord channel here](https://discord.gg/RNJBjgh8gz).

## GEE Authentication and Initialisation

To be able to use Google Earth Engine, you need to create a service account and get an access-key-file associated with that account. This will only take a few minutes, but make sure to follow the instructions properly. Follow the instructions [here](https://developers.google.com/earth-engine/guides/service_account?hl=en). To use the service account and the key-file, use the following code to initialise.

<GitHubGist id="b75ef65c43ea13eacac41fe660c54b80" />

:::note

Make sure to keep the key-file.json in another location, preferably safely in the root folder of your computer and not commit it into a public repository.

:::

## Understanding GEE’s client-server model

As the developer docs of GEE puts it, Earth Engine is not like any GIS or geospatial tool you’ve used before. GEE is primarily a cloud-platform, and all the processing is done in the cloud and not on your machine. The interactions with GEE that you will do are merely instructions that are translated and sent to GEE’s cloud platform. To understand this better, we would have to go through GEE’s Client vs. Server and its lazy computational model.

### [Client vs. Server](https://developers.google.com/earth-engine/guides/client_server)

Let’s start with what I mentioned before, **_GEE is primarily a cloud-platform_**. It lets you do all the processing in the cloud. So, how do you access this processing-functions?

Here is where the `earthengine-api` library comes to use. The Python package `earthengine-api` provides objects to the client (which is you) that act as proxy to the server objects which is passed and processed in the cloud.

To understand the client-server model better, let’s take an example of a String variable in the client and a String variable in the server. On creating a String in the client and printing its type, we get the Python `class str` object to represent a string. If we want to send a string to the server for use or manipulation in the cloud, we would use the `ee.String` to wrap up the data in a proxy container which can be read in the server. To be more specific, the `ee. objects` are an `ee.computedObject` which is the parent class to the proxy objects.

```
>> # Client side string
>> client_string = 'I am a Python String object'
>> print(type(client_string))
<class 'str'>

>> # Server side string
>> server_string = ee.String('I am proxy ee String object!');
>> print(type(server_string))
<class 'ee.ee_string.String'>
```

The proxy objects do not contain any actual data or processing functions/algorithms. They are just handles for the objects on the server (cloud-platform), to merely convey the instructions that are to be executed in the server. Think of it as a way to communicate to the server using code, and to do that you need to wrap the data and instruction in a `ee.computedObject` container of the specific type.

This understanding becomes even more relevant when performing loops or using conditional statements on the data. To perform these, the instructions are to be sent to the server to execute them. To understand how these are implemented [check this page out](https://developers.google.com/earth-engine/guides/client_server) for more details.

### [Lazy computational model (Deferred execution)](https://developers.google.com/earth-engine/guides/deferred_execution)

So, from the above we know that the `earthengine-api` package is merely to send instructions to the server. So, how and when does the execution happen?

The client side library `earthengine-api` compiles all the instructions into a JSON object and is sent to the server. However, this is not executed immediately. The execution is _deferred_ until there is a request for the result. The request for the result can be a `print` statement, or the `image` object to be displayed.

This on-demand computation as affects what is return to the client (you the user). The result from the earthengine-api is a url to the GEE tile server where the data is to be fetched. So, the images that are within the mentioned area of interest are selectively processed. The area of interest is determined by the zoom level and the center location of the map in the client display. And, as you move and zoom, the images are processed and sent to the client to be viewed. The images are thus computed lazily.

## Using Greppo with GEE

Using Greppo to display and visualise Earth Engine image objects are fairly straight forward, all you need to use is: `app.ee_layer()`. The basic data types where geospatial data is stored in GEE is in,

-   `Image` : fundamental raster data type in Earth Engine.
-   `ImageCollection` : stack or time-series of images.
-   `Geometry` : fundamental vector data type in Earth Engine.
-   `Feature` : a `Geometry` with attributes.
-   `FeatureCollection` : a set of `Feature`.

After understanding the client-server and lazy computational model of GEE, we can extrapolate that these data types are processed on demand, upon the request for its visualisation.

### So, how to use Greppo with GEE?

It is best explained with an example. Let’s start with the scaffolding of the app. You would first have to import the `app` object from `Greppo` as this will be your entry point to communicate with the frontend. You would then have to `import ee`, authenticate yourself to Earth Engine and initialise your session with the credentials from your service account mentioned above.

<GitHubGist id="02ba22e5623d3b40211f74a51a1b9a4b" />

Next, let’s start with selecting the dataset from the catalog. Here, we are using the `USGS/SRTMGL1_003` to get the Digital Elevation map. We need to first get a land mask for all the values in the DEM image data greater than 0, for which we use `dem.get(0)`. Next, we need to apply the mask on our DEM to only visualise the land, for which we use `dem.updateMask(dem.gt(0))` and we assign the result as our `ee_dem` to be visualised. Since all the data is stored as int16 (matrix of values between 32767 and -32768), we would have to visualise the matrix using a palette.

To add a palette we create a visualisation parameter object containing the instruction for producing an RGM or greyscale image. Here we use a palette containing the `Hex values:[‘006633’, ‘E5FFCC’, ‘662A00’, ‘D8D8D8’, ‘F5F5F5’]` and map it linearly to the values corresponding to the `min -> #006633`and `max -> #F5F5F5`specified.

:::note

The data stored in the DEM is a raster, represented as a matrix and each cell contains the elevation in meters of the point representing the cell.

:::

To then visualise this map in the web-application using Greppo, all you need to use is `app.ee_layer()`. The `ee_object` is the earth engine image object, `vis_param` is the visualisation parameter dictionary, `name` corresponds to the unique identifier which will be used in the web-app frontend, and a `description` is optional to provide additional direction to the app user. More on this can be found in the documentation [**_here_**](https://docs.greppo.io/map-components/ee-layer.html).

<figure>

![Initial setup](https://cdn-images-1.medium.com/max/1600/1*PsuigXZVNhFxLMhr26Bdag.png)

<figcaption>
Figure: View of the web-app from the above step. Image by author.
</figcaption>
</figure>

## End-to-end communication: complete web-app

So far we’ve seen how to only visualise the earth engine object in Greppo. However, Greppo is capable of complex interaction between the frontend and backend. Let’s use an example of finding the elevation of a point specified by the user. We’ll be using three of Greppo’s API features.

-   `app.display()` : To display a text or markdown in the frontend.
-   `app.number()` : A number input feature in the frontend for the user to enter a value. The variable to which it is bound in the backend will be updated to the value specified by the user.
-   `app.text()` : A text input feature in the frontend for the user to enter a value. The variable to which it is bound in the backend will be updated to the value specified by the user.

Refer to the [**_documentation here_**](https://docs.greppo.io/index.html) for more details.

Let’s start with using the `app.display` (`name` is the unique identifier and the value is the text displayed which can be a multiline string) to display some text for guiding the web-app user. After which lets create two number inputs one each for the longitude and latitude of the point using `app.number()`.

`app.number()` takes in name, the identifier displayed on the frontend, and value, which is the default value for this element. Next let’s also create a text input for getting the name of the point using `app.text()` with `name` and `value` as mentioned for `app.number()`.

Using the latitude and longitude of the point, we can now create an earth engine Geometry object for the point with the visualisation parameters `color: ‘red’`. We can now display this using the `app.ee_layer()` as mentioned above.

<GitHubGist id="a73e7f3496e3c4bbfd350f1be59a8b51" />

To find the elevation of the point, we make use of the earth engine method `sample` on the DEM object. We sample the point in the DEM to get the properties from the DEM. We take the first point from the output and use the `.get` method to find the value associated with the property `elevation`. And, finally we compose a multiline string to display the output.

:::note

To center the map to a point and at a zoom level on the initial load, make use of `app.map(center=[lat, lon], zoom=level)` .

:::

<figure>

![Greppo's interactive feature](https://cdn-images-1.medium.com/max/1600/1*IZjMibr0FiHjY86vCXC4aQ.png)

<figcaption>
Figure: View of the web-app with the interaction feature. Image by author.
</figcaption>
</figure>

## Conclusion

Our goal was to create a web-app completely in Python, using the data and computation feature of google earth engine and Greppo’s web-app development library. We went through understanding the working of GEE, understood how to integrate Greppo with GEE. Learnt to use `app.ee_layer()`, `app.display()`, `app.number()` and `app.text()` to create a complete web-app that communicates end-to-end with the frontend and backend.

All the files for the demo can be found here: [https://github.com/greppo-io/greppo-demo/tree/main/ee-demo](https://github.com/greppo-io/greppo-demo/tree/main/ee-demo)

> Check out the [**_GitHub repository: here_**](https://github.com/greppo-io/greppo) to be updated on the latest on Greppo. In case of bugs, issues or feature requests for your use-case reach out on the [Discord channel](https://discord.gg/RNJBjgh8gz) or open an issue on GitHub. Built something with Greppo? Post it GitHub.

-   GitHub repository: [https://github.com/greppo-io/greppo](https://github.com/greppo-io/greppo)
-   Documentation: [https://docs.greppo.io/](https://docs.greppo.io/)
-   Website: [https://greppo.io/](https://greppo.io/)

_Originally posted in [KD Nuggets](https://www.kdnuggets.com/2022/03/building-geospatial-application-python-google-earth-engine-greppo.html)._
