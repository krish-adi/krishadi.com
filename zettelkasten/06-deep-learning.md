---
title: Deep Learning
description: Deep-learning quick reference cheat sheet
date: 2022-04-21
modified: 2022-04-26
category: zettelkasten
layout: post
---

# Deep learning

## Single neuron

Is the fundamental component of a neural network. It is a Linear Unit: 𝑦=𝑤𝑥+𝑏y=wx+b

![Diagram of a linear unit.](https://i.imgur.com/mfOlDR6.png)

The input is `x`. Its connection to the neuron has a **weight** which is `w`. Whenever a value flows through a connection, you multiply the value by the connection's weight. For the input `x`, what reaches the neuron is `w * x`. A neural network "learns" by modifying its weights.

The `b` is a special kind of weight we call the **bias**. The bias doesn't have any input data associated with it; instead, we put a `1` in the diagram so that the value that reaches the neuron is just `b` (since `1 * b = b`). The bias enables the neuron to modify the output independently of its inputs.

The `y` is the value the neuron ultimately outputs. To get the output, the neuron sums up all the values it receives through its connections. This neuron's activation is `y = w * x + b`, or as a formula 𝑦=𝑤𝑥+𝑏y=wx+b.

**Multiple inputs**

We can just add more input connections to the neuron, one for each additional feature. To find the output, we would multiply each input to its connection weight and then add them all together.

![Three input connections: x0, x1, and x2, along with the bias.](https://i.imgur.com/vyXSnlZ.png)

The formula for this neuron would be 𝑦=𝑤0𝑥0+𝑤1𝑥1+𝑤2𝑥2+𝑏y=w0x0+w1x1+w2x2+b. A linear unit with two inputs will fit a plane, and a unit with more inputs than that will fit a hyperplane.

## [Linear Units in Keras](https://www.kaggle.com/code/ryanholbrook/a-single-neuron#Linear-Units-in-Keras)

Create a model in Keras through `keras.Sequential`, which creates a neural network as a stack of _layers_.

```python
from tensorflow import keras
from tensorflow.keras import layers

# Create a network with 1 linear unit
model = keras.Sequential([
    layers.Dense(units=1, input_shape=[3])
])
```

With the first argument, `units`, we define how many outputs we want. In this case of one output we'll use `units=1`. With the second argument, `input_shape`, we tell Keras the dimensions of the inputs. Setting `input_shape=[3]` ensures the model will accept three features as input. `input_shape` a Python list as the features are arranged by column, so we'll always have `input_shape=[num_columns]`. The reason Keras uses a list here is to permit use of more complex datasets. Image data, for instance, might need three dimensions: `[height, width, channels]`.

## Deep neural network

[**Layers**](https://www.kaggle.com/code/ryanholbrook/deep-neural-networks#Layers)

Neural networks typically organize their neurons into **layers**. When we collect together linear units having a common set of inputs we get a **dense** layer.

![A stack of three circles in an input layer connected to two circles in a dense layer.](https://i.imgur.com/2MA4iMV.png)

A dense layer of two linear units receiving two inputs and a bias.

Each layer in a neural network performs some kind of relatively simple transformation. Through a deep stack of layers, a neural network can transform its inputs in more and more complex ways. In a well-trained neural network, each layer is a transformation getting us a little bit closer to a solution. A layer can be, essentially, any kind of _data transformation_. Many layers, like the [convolutional](https://www.tensorflow.org/api_docs/python/tf/keras/layers/Conv2D) and [recurrent](https://www.tensorflow.org/api_docs/python/tf/keras/layers/RNN) layers, transform data through use of neurons and differ primarily in the pattern of connections they form. Others though are used for [feature engineering](https://www.tensorflow.org/api_docs/python/tf/keras/layers/Embedding) or just [simple arithmetic](https://www.tensorflow.org/api_docs/python/tf/keras/layers/Add). [The other layers to explore](https://www.tensorflow.org/api_docs/python/tf/keras/layers)!

[**Activation Function**](https://www.kaggle.com/code/ryanholbrook/deep-neural-networks#The-Activation-Function)

It turns out, however, that two dense layers with nothing in between are no better than a single dense layer by itself. Dense layers by themselves can never move us out of the world of lines and planes. What we need is something _nonlinear_. What we need are activation functions.

![](https://i.imgur.com/OLSUEYT.png)

Without activation functions, neural networks can only learn linear relationships. In order to fit curves, we'll need to use activation functions.

An **activation function** is simply some function we apply to each of a layer's outputs (its _activations_). The most common is the _rectifier_ function 𝑚𝑎𝑥(0,𝑥)max(0,x).

![A graph of the rectifier function. The line y=x when x>0 and y=0 when x<0, making a 'hinge' shape like '_/'.](https://i.imgur.com/aeIyAlF.png)

The rectifier function has a graph that's a line with the negative part "rectified" to zero. Applying the function to the outputs of a neuron will put a _bend_ in the data, moving us away from simple lines.

When we attach the rectifier to a linear unit, we get a **rectified linear unit** or **ReLU**. (For this reason, it's common to call the rectifier function the "ReLU function".) Applying a ReLU activation to a linear unit means the output becomes `max(0, w * x + b)`, which we might draw in a diagram like:

![Diagram of a single ReLU. Like a linear unit, but instead of a '+' symbol we now have a hinge '_/'.](https://i.imgur.com/eFry7Yu.png)

A rectified linear unit.

[**Stacking Dense Layers**](https://www.kaggle.com/code/ryanholbrook/deep-neural-networks#Stacking-Dense-Layers)

Stack layers to get complex data transformations.

![An input layer, two hidden layers, and a final linear layer.](https://i.imgur.com/Y5iwFQZ.png)

A stack of dense layers makes a "fully-connected" network.

The layers before the output layer are sometimes called **hidden** since we never see their outputs directly.

Now, notice that the final (output) layer is a linear unit (meaning, no activation function). That makes this network appropriate to a regression task, where we are trying to predict some arbitrary numeric value. Other tasks (like classification) might require an activation function on the output.

## Building Sequential Models(https://www.kaggle.com/code/ryanholbrook/deep-neural-networks#Building-Sequential-Models)

The `Sequential` model we've been using will connect together a list of layers in order from first to last: the first layer gets the input, the last layer produces the output. This creates the model in the figure above:

```python

from tensorflow import keras
from tensorflow.keras import layers

model = keras.Sequential([
    # the hidden ReLU layers
    layers.Dense(units=4, activation='relu', input_shape=[2]),
    layers.Dense(units=3, activation='relu'),
    # the linear output layer 
    layers.Dense(units=1),
])
```

## Stochastic gradient descent

We need two more things:

-   A "loss function" that measures how good the network's predictions are.
-   An "optimizer" that can tell the network how to change its weights.

[**The Loss Function**](https://www.kaggle.com/code/ryanholbrook/stochastic-gradient-descent#The-Loss-Function)

Tell a network _what_ problem to solve. This is the job of the loss function. The **loss function** measures the disparity between the the target's true value and the value the model predicts.

A common loss function for regression problems is the **mean absolute error** or **MAE**. For each prediction `y_pred`, MAE measures the disparity from the true target `y_true` by an absolute difference `abs(y_true - y_pred)`.

The total MAE loss on a dataset is the mean of all these absolute differences. The mean absolute error is the average length between the fitted curve and the data points.

![A graph depicting error bars from data points to the fitted line..](https://i.imgur.com/VDcvkZN.png)

Besides MAE, other loss functions you might see for regression problems are the mean-squared error (MSE) or the Huber loss (both available in Keras).

During training, the model will use the loss function as a guide for finding the correct values of its weights (lower loss is better). In other words, the loss function tells the network its objective.

[**The Optimizer - Stochastic Gradient Descent**](https://www.kaggle.com/code/ryanholbrook/stochastic-gradient-descent#The-Optimizer---Stochastic-Gradient-Descent)

_how_ to solve it. This is the job of the **optimizer**. The optimizer is an algorithm that adjusts the weights to minimize the loss. Virtually all of the optimization algorithms used in deep learning belong to a family called **stochastic gradient descent**. They are iterative algorithms that train a network in steps. One **step** of training goes like this:

1.  Sample some training data and run it through the network to make predictions.
2.  Measure the loss between the predictions and the true values.
3.  Finally, adjust the weights in a direction that makes the loss smaller.

Then just do this over and over until the loss is as small as you like (or until it won't decrease any further.)

![Fitting a line batch by batch. The loss decreases and the weights approach their true values.](https://i.imgur.com/rFI1tIk.gif)

Training a neural network with Stochastic Gradient Descent.

Each iteration's sample of training data is called a **minibatch** (or often just "batch"), while a complete round of the training data is called an **epoch**. The number of epochs you train for is how many times the network will see each training example.

[**Learning Rate and Batch Size**](https://www.kaggle.com/code/ryanholbrook/stochastic-gradient-descent#Learning-Rate-and-Batch-Size)

The size of these shifts is determined by the **learning rate**. A smaller learning rate means the network needs to see more minibatches before its weights converge to their best values.

The learning rate and the size of the minibatches are the two parameters that have the largest effect on how the SGD training proceeds. Their interaction is often subtle and the right choice for these parameters isn't always obvious.

It won't be necessary to do an extensive hyperparameter search to get satisfactory results. **Adam** is an SGD algorithm that has an adaptive learning rate that makes it suitable for most problems without any parameter tuning (it is "self tuning", in a sense). Adam is a great general-purpose optimizer.

[**Adding the Loss and Optimizer**](https://www.kaggle.com/code/ryanholbrook/stochastic-gradient-descent#Adding-the-Loss-and-Optimizer)

After defining a model, you can add a loss function and optimizer with the model's `compile` method:

```
model.compile(
    optimizer="adam",
    loss="mae",
)
```

Notice that we are able to specify the loss and optimizer with just a string. You can also access these directly through the Keras API -- if you wanted to tune parameters, for instance.

## Example - Red Wine Quality

```python
import pandas as pd
from IPython.display import display

red_wine = pd.read_csv('../input/dl-course-data/red-wine.csv')

# Create training and validation splits
df_train = red_wine.sample(frac=0.7, random_state=0)
df_valid = red_wine.drop(df_train.index)
display(df_train.head(4))

# Scale to [0, 1]
max_ = df_train.max(axis=0)
min_ = df_train.min(axis=0)
df_train = (df_train - min_) / (max_ - min_)
df_valid = (df_valid - min_) / (max_ - min_)

# Split features and target
X_train = df_train.drop('quality', axis=1)
X_valid = df_valid.drop('quality', axis=1)
y_train = df_train['quality']
y_valid = df_valid['quality']
```

<!-- <table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>fixed acidity</th>
      <th>volatile acidity</th>
      <th>citric acid</th>
      <th>residual sugar</th>
      <th>chlorides</th>
      <th>free sulfur dioxide</th>
      <th>total sulfur dioxide</th>
      <th>density</th>
      <th>pH</th>
      <th>sulphates</th>
      <th>alcohol</th>
      <th>quality</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1109</th>
      <td>10.8</td>
      <td>0.470</td>
      <td>0.43</td>
      <td>2.10</td>
      <td>0.171</td>
      <td>27.0</td>
      <td>66.0</td>
      <td>0.99820</td>
      <td>3.17</td>
      <td>0.76</td>
      <td>10.8</td>
      <td>6</td>
    </tr>
    <tr>
      <th>1032</th>
      <td>8.1</td>
      <td>0.820</td>
      <td>0.00</td>
      <td>4.10</td>
      <td>0.095</td>
      <td>5.0</td>
      <td>14.0</td>
      <td>0.99854</td>
      <td>3.36</td>
      <td>0.53</td>
      <td>9.6</td>
      <td>5</td>
    </tr>
    <tr>
      <th>1002</th>
      <td>9.1</td>
      <td>0.290</td>
      <td>0.33</td>
      <td>2.05</td>
      <td>0.063</td>
      <td>13.0</td>
      <td>27.0</td>
      <td>0.99516</td>
      <td>3.26</td>
      <td>0.84</td>
      <td>11.7</td>
      <td>7</td>
    </tr>
    <tr>
      <th>487</th>
      <td>10.2</td>
      <td>0.645</td>
      <td>0.36</td>
      <td>1.80</td>
      <td>0.053</td>
      <td>5.0</td>
      <td>14.0</td>
      <td>0.99820</td>
      <td>3.17</td>
      <td>0.42</td>
      <td>10.0</td>
      <td>6</td>
    </tr>
  </tbody>
</table> -->

```python
from tensorflow import keras
from tensorflow.keras import layers

model = keras.Sequential([
    layers.Dense(512, activation='relu', input_shape=[11]),
    layers.Dense(512, activation='relu'),
    layers.Dense(512, activation='relu'),
    layers.Dense(1),
])
```

```python
model.compile(
    optimizer='adam',
    loss='mae',
)
```

```python
history = model.fit(
    X_train, y_train,
    validation_data=(X_valid, y_valid),
    batch_size=256,
    epochs=10,
)
```

The `fit` method in fact keeps a record of the loss produced during training in a `History` object. We'll convert the data to a Pandas dataframe, which makes the plotting easy.

```python
import pandas as pd

# convert the training history to a dataframe
history_df = pd.DataFrame(history.history)
# use Pandas native plot method
history_df['loss'].plot();
```

![](https://www.kaggleusercontent.com/kf/86258816/eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..uNkhJtFK7RwmG9pSoAjnhA.-qzDMWcGxPkmaRklGHlD8pIdeDQBjbuslPDR-xw_uC2YzIsztW0VPQDI137Hz91VJBvuMfSOiz9OTRhdw1Ds5LwFF9lzSNPWM6UDtPWpmw5Ja1-28fgaid2GlSeC2i8M9fgigBQK08OfoDcG_GJQexDWUKhVTS4mcpXYApUNE0VsZBotIVY7U2pw36z4XS_3JBMFwzsyyXiwHJWaWpSDVoZd-Yt2D6CYt727zDb6EIF9NEhMT1L66TSYMgJWzDHlZLLp1bVmkNHWgLeqt352bKoeW_8upzRcWky6eMXfz5GBUyAzCxjhwsKgNLn1Fv0lVu_QSBwL1kZz7_ZfcUmJHDLVfZI6WfkSfpV6MHbtHgRNwg7EcUdo_C2_Fs_Ob4HzyzZB6uYI-Xg-kR1IHd0wK0Ii0XFiazi5OaQn4TFiLnGqCJBIRkXGe-gaMtFX4-wjEdQkzA1RwCsofos_IAXLt_eaO8-PnudFc3wfX9tVKxn6Il-0gQ8VE05NhbKhZQMPDqKjl4K774qFUutojGa0VW9uI-XhYPcv8FufeIzhdObX8Oye1U65hd18nqzRWdpylOMvipb1ZvvGrxwfienzko-86WDVSXrmcRMIEhhRLE2A8jFVdxvOa3u83Bmz7dyzmh_Bg9uT_-yfwvcc5QBBnCqH40Qk9hq_KHvxczLV3cU.Ovdjz8Kjs76XS7FAWl8AUA/__results___files/__results___12_0.png)

## Overfitting and Underfitting

[**Interpreting the Learning Curves**](https://www.kaggle.com/code/ryanholbrook/overfitting-and-underfitting#Interpreting-the-Learning-Curves)

You might think about the information in the training data as being of two kinds: _signal_ and _noise_. The signal is the part that generalizes, the part that can help our model make predictions from new data. The noise is that part that is _only_ true of the training data; the noise is all of the random fluctuation that comes from data in the real-world or all of the incidental, non-informative patterns that can't actually help the model make predictions. The noise is the part might look useful but really isn't.

We train a model by choosing weights or parameters that minimize the loss on a training set. You might know, however, that to accurately assess a model's performance, we need to evaluate it on a new set of data, the _validation_ data. (You could see our lesson on [model validation](https://www.kaggle.com/dansbecker/model-validation) in _Introduction to Machine Learning_ for a review.)

When we train a model we've been plotting the loss on the training set epoch by epoch. To this we'll add a plot the validation data too. These plots we call the **learning curves**. To train deep learning models effectively, we need to be able to interpret them.

![A graph of training and validation loss.](https://i.imgur.com/tHiVFnM.png)

The validation loss gives an estimate of the expected error on unseen data.

Now, the training loss will go down either when the model learns signal or when it learns noise. But the validation loss will go down only when the model learns signal. (Whatever noise the model learned from the training set won't generalize to new data.) So, when a model learns signal both curves go down, but when it learns noise a _gap_ is created in the curves. The size of the gap tells you how much noise the model has learned.

Ideally, we would create models that learn all of the signal and none of the noise. This will practically never happen. Instead we make a trade. We can get the model to learn more signal at the cost of learning more noise. So long as the trade is in our favor, the validation loss will continue to decrease. After a certain point, however, the trade can turn against us, the cost exceeds the benefit, and the validation loss begins to rise.

![Two graphs. On the left, a line through a few data points with the true fit a parabola. On the right, a curve running through each datapoint with the true fit a parabola.](https://i.imgur.com/eUF6mfo.png)

Underfitting and overfitting.

This trade-off indicates that there can be two problems that occur when training a model: not enough signal or too much noise. **Underfitting** the training set is when the loss is not as low as it could be because the model hasn't learned enough _signal_. **Overfitting** the training set is when the loss is not as low as it could be because the model learned too much _noise_. The trick to training deep learning models is finding the best balance between the two.

We'll look at a couple ways of getting more signal out of the training data while reducing the amount of noise.

[**Capacity**](https://www.kaggle.com/code/ryanholbrook/overfitting-and-underfitting#Capacity)

A model's **capacity** refers to the size and complexity of the patterns it is able to learn. For neural networks, this will largely be determined by how many neurons it has and how they are connected together. If it appears that your network is underfitting the data, you should try increasing its capacity.

You can increase the capacity of a network either by making it _wider_ (more units to existing layers) or by making it _deeper_ (adding more layers). Wider networks have an easier time learning more linear relationships, while deeper networks prefer more nonlinear ones. Which is better just depends on the dataset.

```
model = keras.Sequential([
    layers.Dense(16, activation='relu'),
    layers.Dense(1),
])

wider = keras.Sequential([
    layers.Dense(32, activation='relu'),
    layers.Dense(1),
])

deeper = keras.Sequential([
    layers.Dense(16, activation='relu'),
    layers.Dense(16, activation='relu'),
    layers.Dense(1),
])
```

[**Early Stopping**](https://www.kaggle.com/code/ryanholbrook/overfitting-and-underfitting#Early-Stopping)

We mentioned that when a model is too eagerly learning noise, the validation loss may start to increase during training. To prevent this, we can simply stop the training whenever it seems the validation loss isn't decreasing anymore. Interrupting the training this way is called **early stopping**.

![A graph of the learning curves with early stopping at the minimum validation loss, underfitting to the left of it and overfitting to the right.](https://i.imgur.com/eP0gppr.png)

We keep the model where the validation loss is at a minimum.

Once we detect that the validation loss is starting to rise again, we can reset the weights back to where the minimum occured. This ensures that the model won't continue to learn noise and overfit the data.

Training with early stopping also means we're in less danger of stopping the training too early, before the network has finished learning signal. So besides preventing overfitting from training too long, early stopping can also prevent _underfitting_ from not training long enough. Just set your training epochs to some large number (more than you'll need), and early stopping will take care of the rest.

[**Adding Early Stopping**](https://www.kaggle.com/code/ryanholbrook/overfitting-and-underfitting#Adding-Early-Stopping)

In Keras, we include early stopping in our training through a callback. A **callback** is just a function you want run every so often while the network trains. The early stopping callback will run after every epoch. (Keras has [a variety of useful callbacks](https://www.tensorflow.org/api_docs/python/tf/keras/callbacks) pre-defined, but you can [define your own](https://www.tensorflow.org/api_docs/python/tf/keras/callbacks/LambdaCallback), too.)

```python
from tensorflow.keras.callbacks import EarlyStopping

early_stopping = EarlyStopping(
    min_delta=0.001, # minimium amount of change to count as an improvement
    patience=20, # how many epochs to wait before stopping
    restore_best_weights=True,
)
```

These parameters say: "If there hasn't been at least an improvement of 0.001 in the validation loss over the previous 20 epochs, then stop the training and keep the best model you found." It can sometimes be hard to tell if the validation loss is rising due to overfitting or just due to random batch variation. The parameters allow us to set some allowances around when to stop.

## Example - Continue

```python
from tensorflow import keras
from tensorflow.keras import layers, callbacks

early_stopping = callbacks.EarlyStopping(
    min_delta=0.001, # minimium amount of change to count as an improvement
    patience=20, # how many epochs to wait before stopping
    restore_best_weights=True,
)

model = keras.Sequential([
    layers.Dense(512, activation='relu', input_shape=[11]),
    layers.Dense(512, activation='relu'),
    layers.Dense(512, activation='relu'),
    layers.Dense(1),
])
model.compile(
    optimizer='adam',
    loss='mae',
)
```

```python
history = model.fit(
    X_train, y_train,
    validation_data=(X_valid, y_valid),
    batch_size=256,
    epochs=500,
    callbacks=[early_stopping], # put your callbacks in a list
    verbose=0,  # turn off training log
)

history_df = pd.DataFrame(history.history)
history_df.loc[:, ['loss', 'val_loss']].plot();
print("Minimum validation loss: {}".format(history_df['val_loss'].min()))
```

Minimum validation loss: 0.09154561161994934

![](https://www.kaggleusercontent.com/kf/86258812/eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..Yf3L9fIXJzuVdnPZs53AxQ.4jHZo86oA7fcdn0iNS2xBx-4QqmXOjAOSYChFEyxJrB0NftKLwuPUNq7wBnuJ2WFbalK-xfG6EQsg3Jk0x599gyAXHA5TFKH7Mg_oNE-XivLwAml-wY3Ey-HjlResmGFY3KK2-NMvpy1zQ0xPXEUnWVTwaMrD6i3dDyHh-9tbtfx_HcP5o5K5tDDCDax2xyKLSYMAgb_bg6VxddhHZOCS81JV22kMbYdAljsSIEBoxO0z5SgNgNF6rQJ-4UTMBYPa6kNa-Lb5d-5zvTF80WXTTaGTkpl6J4zGTvyH-KI_upofdk5__pvPPgIKFwtv3AjOYX6jZccI_oRlcIeTrnAkeCu1HVJMG31zOK_iOKJsFbwcTbbwk_VqT21N1tLeL1D7ujzeWsby3dhtG97IVkh4tPMzXAov8NEZzN-6YQ1cxMj9lvnV3CcAxgg0UrCApwzGuSVNHi2tJzv8doHcDr0C01ddNYMqYMWDDbF6Me2BEJ_2Nnxy9Zi6S2MyCo1LRndiyVSF1vUt554Dsi594vOc6l2CZr7Wf0xd55A62drY4htsWjMX86VbA9a0bjpl3Ag9Y-KKO1WluOgORkR-7A9DQ6gzlDiRYhpKp8GLlkjl-UW_h1OVQCFQPeQbS-Nvk1C04W7IW4V_COWECx_OJUS7V2JrVW3XKuAOJmntDr-Zo4.wTh7qvGZUT0_sd4VdMmNUg/__results___files/__results___7_2.png)

## Dropout and Batch Normalization (some special layer examples)

[**Dropout**](https://www.kaggle.com/code/ryanholbrook/dropout-and-batch-normalization#Dropout)

The first of these is the "dropout layer", which can help correct overfitting.

Overfitting is caused by the network learning spurious patterns in the training data. To recognize these spurious patterns a network will often rely on very a specific combinations of weight, a kind of "conspiracy" of weights. Being so specific, they tend to be fragile: remove one and the conspiracy falls apart.

This is the idea behind **dropout**. To break up these conspiracies, we randomly _drop out_ some fraction of a layer's input units every step of training, making it much harder for the network to learn those spurious patterns in the training data. Instead, it has to search for broad, general patterns, whose weight patterns tend to be more robust.

![An animation of a network cycling through various random dropout configurations.](https://i.imgur.com/a86utxY.gif)

Here, 50% dropout has been added between the two hidden layers.

You could also think about dropout as creating a kind of _ensemble_ of networks. The predictions will no longer be made by one big network, but instead by a committee of smaller networks. Individuals in the committee tend to make different kinds of mistakes, but be right at the same time, making the committee as a whole better than any individual. (If you're familiar with random forests as an ensemble of decision trees, it's the same idea.)

[_Adding Dropout_](https://www.kaggle.com/code/ryanholbrook/dropout-and-batch-normalization#Adding-Dropout)

In Keras, the dropout rate argument `rate` defines what percentage of the input units to shut off. Put the `Dropout` layer just before the layer you want the dropout applied to:

```python
keras.Sequential([
    # ...
    layers.Dropout(rate=0.3), # apply 30% dropout to the next layer
    layers.Dense(16),
    # ...
])
```

# Batch Normalization[](https://www.kaggle.com/code/ryanholbrook/dropout-and-batch-normalization#Batch-Normalization)

Next layer performs "batch normalization" (or "batchnorm"), which can help correct training that is slow or unstable.

With neural networks, it's generally a good idea to put all of your data on a common scale, perhaps with something like scikit-learn's [StandardScaler](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html) or [MinMaxScaler](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.MinMaxScaler.html). The reason is that SGD will shift the network weights in proportion to how large an activation the data produces. Features that tend to produce activations of very different sizes can make for unstable training behavior.

Now, if it's good to normalize the data before it goes into the network, maybe also normalizing inside the network would be better! In fact, we have a special kind of layer that can do this, the **batch normalization layer**. A batch normalization layer looks at each batch as it comes in, first normalizing the batch with its own mean and standard deviation, and then also putting the data on a new scale with two trainable rescaling parameters. Batchnorm, in effect, performs a kind of coordinated rescaling of its inputs.

Most often, batchnorm is added as an aid to the optimization process (though it can sometimes also help prediction performance). Models with batchnorm tend to need fewer epochs to complete training. Moreover, batchnorm can also fix various problems that can cause the training to get "stuck". Consider adding batch normalization to your models, especially if you're having trouble during training.

[_Adding Batch Normalization_](https://www.kaggle.com/code/ryanholbrook/dropout-and-batch-normalization#Adding-Batch-Normalization)

It seems that batch normalization can be used at almost any point in a network. You can put it after a layer...

```python
layers.Dense(16, activation='relu'),
layers.BatchNormalization(),
```

... or between a layer and its activation function:

```python
layers.Dense(16),
layers.BatchNormalization(),
layers.Activation('relu'),
```

And if you add it as the first layer of your network it can act as a kind of adaptive preprocessor, standing in for something like Sci-Kit Learn's `StandardScaler`.

## [Example - Using Dropout and Batch Normalization](https://www.kaggle.com/code/ryanholbrook/dropout-and-batch-normalization#Example---Using-Dropout-and-Batch-Normalization)

Let's continue developing the _Red Wine_ model. Now we'll increase the capacity even more, but add dropout to control overfitting and batch normalization to speed up optimization. This time, we'll also leave off standardizing the data, to demonstrate how batch normalization can stabalize the training.

When adding dropout, you may need to increase the number of units in your `Dense` layers.

```python
from tensorflow import keras
from tensorflow.keras import layers

model = keras.Sequential([
    layers.Dense(1024, activation='relu', input_shape=[11]),
    layers.Dropout(0.3),
    layers.BatchNormalization(),
    layers.Dense(1024, activation='relu'),
    layers.Dropout(0.3),
    layers.BatchNormalization(),
    layers.Dense(1024, activation='relu'),
    layers.Dropout(0.3),
    layers.BatchNormalization(),
    layers.Dense(1),
])
```

```python

model.compile(
    optimizer='adam',
    loss='mae',
)

history = model.fit(
    X_train, y_train,
    validation_data=(X_valid, y_valid),
    batch_size=256,
    epochs=100,
    verbose=0,
)

# Show the learning curves
history_df = pd.DataFrame(history.history)
history_df.loc[:, ['loss', 'val_loss']].plot();
```

![](https://www.kaggleusercontent.com/kf/86258821/eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..c5gv9goDkeSW7c4XwutyfQ.kIrAQmrreEoD8OaYa-MfnBgmcHPIkSif21Sjc0mF-lzVDACo9TxxBGlrdApKSj_v-YkfGqquzf522VUuslYc3xIdkigQb6F5UbEYHXv0iUzFwnpnWTzRJMPbzuotVAU5zYMVDb_BOEEQIjD46lG86LyVGSkXmZcePYdmQJjP8DFCnAxS5cc0sk8bjy0n7Uduc-sw-pt8B6puEuW6nIAS_0vdfCNhLLG95OtpOBR1O0Ro4BqxbWI7AytdRqlFTR_mRUIaq1sKXGzNn29GdWqvYtDfNGUnj5Cb0yZThkZaALam-MRS4bFtPmlyPbgEUPs-cs2WUjWVXQHTZ--wvjU5eo4ez6z8rmWiFSxUSnpzWKffGVAYNrt_F7LOQVI3TkV19uxuZDz9QVAVgZtQfD8DoKKdhs-J6rSfn4TXNK5ApsybxRFv841_lPqe7RcbtAKflo4VqfE8UgspafPn1PCRC0pOSEFrYNvXP4whTWLuS-pcpicIASX_F1G3O4EMhfhREDsxLxxKhnBcoCE2oLas0YCTkAzQLsGcH73vsBXJBwBvWx8LncYwic3VqaR8f-fp5sI7D8T_zbPUGSz2WIW_mo8y6FtAJ4-MmDNu-WezUKZqMLpLxGWcdmFlwFK4wTDpcw-412chYhtBmF94VSMIrlkJIKpEVdcKJbJHyzqR8EjiMtrgnaqdGHhOQSfdRbO1.GRvj0MPaJ4hkvti3SMwe9w/__results___files/__results___5_1.png)

## Binary classification

Classification into one of two classes is a common machine learning problem. You might want to predict whether or not a customer is likely to make a purchase, whether or not a credit card transaction was fraudulent, whether deep space signals show evidence of a new planet, or a medical test evidence of a disease. These are all **binary classification** problems.

In your raw data, the classes might be represented by strings like `"Yes"` and `"No"`, or `"Dog"` and `"Cat"`. Before using this data we'll assign a **class label**: one class will be `0` and the other will be `1`. Assigning numeric labels puts the data in a form a neural network can use.

[**Accuracy and Cross-Entropy**](https://www.kaggle.com/code/ryanholbrook/binary-classification#Accuracy-and-Cross-Entropy)

**Accuracy** is one of the many metrics in use for measuring success on a classification problem. Accuracy is the ratio of correct predictions to total predictions: `accuracy = number_correct / total`. A model that always predicted correctly would have an accuracy score of `1.0`. All else being equal, accuracy is a reasonable metric to use whenever the classes in the dataset occur with about the same frequency.

The problem with accuracy (and most other classification metrics) is that it can't be used as a loss function. SGD needs a loss function that changes smoothly, but accuracy, being a ratio of counts, changes in "jumps". So, we have to choose a substitute to act as the loss function. This substitute is the _cross-entropy_ function.

Now, recall that the loss function defines the _objective_ of the network during training. With regression, our goal was to minimize the distance between the expected outcome and the predicted outcome. We chose MAE to measure this distance.

For classification, what we want instead is a distance between _probabilities_, and this is what cross-entropy provides. **Cross-entropy** is a sort of measure for the distance from one probability distribution to another.

![Graphs of accuracy and cross-entropy.](https://i.imgur.com/DwVV9bR.png)

Cross-entropy penalizes incorrect probability predictions.

The idea is that we want our network to predict the correct class with probability `1.0`. The further away the predicted probability is from `1.0`, the greater will be the cross-entropy loss.

Use cross-entropy for a classification loss; other metrics you might care about (like accuracy) will tend to improve along with it.

[**Making Probabilities with the Sigmoid Function**](https://www.kaggle.com/code/ryanholbrook/binary-classification#Making-Probabilities-with-the-Sigmoid-Function)

The cross-entropy and accuracy functions both require probabilities as inputs, meaning, numbers from 0 to 1. To covert the real-valued outputs produced by a dense layer into probabilities, we attach a new kind of activation function, the **sigmoid activation**.

![The sigmoid graph is an 'S' shape with horizontal asymptotes at 0 to the left and 1 to the right.](https://i.imgur.com/FYbRvJo.png)

The sigmoid function maps real numbers into the interval [0,1][0,1].

To get the final class prediction, we define a _threshold_ probability. Typically this will be 0.5, so that rounding will give us the correct class: below 0.5 means the class with label 0 and 0.5 or above means the class with label 1. A 0.5 threshold is what Keras uses by default with its [accuracy metric](https://www.tensorflow.org/api_docs/python/tf/keras/metrics/BinaryAccuracy).

## [Example - Binary Classification](https://www.kaggle.com/code/ryanholbrook/binary-classification#Example---Binary-Classification)

The [Ionosphere](https://archive.ics.uci.edu/ml/datasets/Ionosphere) dataset contains features obtained from radar signals focused on the ionosphere layer of the Earth's atmosphere. The task is to determine whether the signal shows the presence of some object, or just empty air.

```python
import pandas as pd
from IPython.display import display

ion = pd.read_csv('../input/dl-course-data/ion.csv', index_col=0)
display(ion.head())

df = ion.copy()
df['Class'] = df['Class'].map({'good': 0, 'bad': 1})

df_train = df.sample(frac=0.7, random_state=0)
df_valid = df.drop(df_train.index)

max_ = df_train.max(axis=0)
min_ = df_train.min(axis=0)

df_train = (df_train - min_) / (max_ - min_)
df_valid = (df_valid - min_) / (max_ - min_)
df_train.dropna(axis=1, inplace=True) # drop the empty feature in column 2
df_valid.dropna(axis=1, inplace=True)

X_train = df_train.drop('Class', axis=1)
X_valid = df_valid.drop('Class', axis=1)
y_train = df_train['Class']
y_valid = df_valid['Class']
```

<!-- <table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>V1</th>
      <th>V2</th>
      <th>V3</th>
      <th>V4</th>
      <th>V5</th>
      <th>V6</th>
      <th>V7</th>
      <th>V8</th>
      <th>V9</th>
      <th>V10</th>
      <th>...</th>
      <th>V26</th>
      <th>V27</th>
      <th>V28</th>
      <th>V29</th>
      <th>V30</th>
      <th>V31</th>
      <th>V32</th>
      <th>V33</th>
      <th>V34</th>
      <th>Class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>1</td>
      <td>0</td>
      <td>0.99539</td>
      <td>-0.05889</td>
      <td>0.85243</td>
      <td>0.02306</td>
      <td>0.83398</td>
      <td>-0.37708</td>
      <td>1.00000</td>
      <td>0.03760</td>
      <td>...</td>
      <td>-0.51171</td>
      <td>0.41078</td>
      <td>-0.46168</td>
      <td>0.21266</td>
      <td>-0.34090</td>
      <td>0.42267</td>
      <td>-0.54487</td>
      <td>0.18641</td>
      <td>-0.45300</td>
      <td>good</td>
    </tr>
    <tr>
      <th>2</th>
      <td>1</td>
      <td>0</td>
      <td>1.00000</td>
      <td>-0.18829</td>
      <td>0.93035</td>
      <td>-0.36156</td>
      <td>-0.10868</td>
      <td>-0.93597</td>
      <td>1.00000</td>
      <td>-0.04549</td>
      <td>...</td>
      <td>-0.26569</td>
      <td>-0.20468</td>
      <td>-0.18401</td>
      <td>-0.19040</td>
      <td>-0.11593</td>
      <td>-0.16626</td>
      <td>-0.06288</td>
      <td>-0.13738</td>
      <td>-0.02447</td>
      <td>bad</td>
    </tr>
    <tr>
      <th>3</th>
      <td>1</td>
      <td>0</td>
      <td>1.00000</td>
      <td>-0.03365</td>
      <td>1.00000</td>
      <td>0.00485</td>
      <td>1.00000</td>
      <td>-0.12062</td>
      <td>0.88965</td>
      <td>0.01198</td>
      <td>...</td>
      <td>-0.40220</td>
      <td>0.58984</td>
      <td>-0.22145</td>
      <td>0.43100</td>
      <td>-0.17365</td>
      <td>0.60436</td>
      <td>-0.24180</td>
      <td>0.56045</td>
      <td>-0.38238</td>
      <td>good</td>
    </tr>
    <tr>
      <th>4</th>
      <td>1</td>
      <td>0</td>
      <td>1.00000</td>
      <td>-0.45161</td>
      <td>1.00000</td>
      <td>1.00000</td>
      <td>0.71216</td>
      <td>-1.00000</td>
      <td>0.00000</td>
      <td>0.00000</td>
      <td>...</td>
      <td>0.90695</td>
      <td>0.51613</td>
      <td>1.00000</td>
      <td>1.00000</td>
      <td>-0.20099</td>
      <td>0.25682</td>
      <td>1.00000</td>
      <td>-0.32382</td>
      <td>1.00000</td>
      <td>bad</td>
    </tr>
    <tr>
      <th>5</th>
      <td>1</td>
      <td>0</td>
      <td>1.00000</td>
      <td>-0.02401</td>
      <td>0.94140</td>
      <td>0.06531</td>
      <td>0.92106</td>
      <td>-0.23255</td>
      <td>0.77152</td>
      <td>-0.16399</td>
      <td>...</td>
      <td>-0.65158</td>
      <td>0.13290</td>
      <td>-0.53206</td>
      <td>0.02431</td>
      <td>-0.62197</td>
      <td>-0.05707</td>
      <td>-0.59573</td>
      <td>-0.04608</td>
      <td>-0.65697</td>
      <td>good</td>
    </tr>
  </tbody>
</table> -->

```python
from tensorflow import keras
from tensorflow.keras import layers

model = keras.Sequential([
    layers.Dense(4, activation='relu', input_shape=[33]),
    layers.Dense(4, activation='relu'),    
    layers.Dense(1, activation='sigmoid'),
])
```

```python
model.compile(
    optimizer='adam',
    loss='binary_crossentropy',
    metrics=['binary_accuracy'],
)
```

```python
early_stopping = keras.callbacks.EarlyStopping(
    patience=10,
    min_delta=0.001,
    restore_best_weights=True,
)

history = model.fit(
    X_train, y_train,
    validation_data=(X_valid, y_valid),
    batch_size=512,
    epochs=1000,
    callbacks=[early_stopping],
    verbose=0, # hide the output because we have so many epochs
)
```

```python

history_df = pd.DataFrame(history.history)
# Start the plot at epoch 5
history_df.loc[5:, ['loss', 'val_loss']].plot()
history_df.loc[5:, ['binary_accuracy', 'val_binary_accuracy']].plot()

print(("Best Validation Loss: {:0.4f}" +\
      "\nBest Validation Accuracy: {:0.4f}")\
      .format(history_df['val_loss'].min(), 
              history_df['val_binary_accuracy'].max()))
              ```

Best Validation Loss: 0.5482
Best Validation Accuracy: 0.7619

![](https://www.kaggleusercontent.com/kf/86258839/eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..Se-_r--QoxyaDTJOBH2APQ.UmftqZcEl83h8ssskNmVEBr1UUep-gCPWecHInnFcOt7vWPh0bfuXWvSeXW23V6qgYes-4e4Ql2C1vlKQMllqm_4PwXePGIoWDGRIcBYmkOW6_pefWLfJWfzguyjY2-PvOcYLYNIfmzXhIBWR6ImCLOkW-8Dsgoa0TQWoWuaNNCIG1UPXnRecm0PXfe_JMO-ahF0txSu_bDX863gjy1dONNp2D_LQZfBqyrujFLgPYGarH54X0GGY0wkFy2hdvgxtGD66QzyP_gLHT90hfQDw9jb_5ZXfVSSGI4Kg2QhRenh8zODqJUJxvDkLBPH9yshYkzDbjSaxjXMjCcceqBrx2adWqigAUSmjmrAV9f4cR_aifm_pP5XbHQo56EiQJ4CLi9xFXZPu-wy5m1paqU7qeYH95qfv59UBRCdnwfypHIUDV-JM628FJcEkspBgz_qmr-MF7ubxY0c7VUWeIGQCb-1_Dtdou0bxN4tn7UPMTEZidpVzheuOwd6bIeOqUZBL10pTpM1kZaZmDWizHF77ce3QQTZ7ni0Cem-OQV7bEqhYI0GfSr8lKLrYFrW7O8cavAqPGx3lcd5uX4AZsLOAOy8GT0LGpEjhfLPuhZoNfJh1Dfc_jRkKP21O2TyveR_FeKviS--OeTgAFi7Gr-oSeLJy4M8C4DxvqOG-DCMf4k.b7jlWGViHMw7LqnNx2t5AA/__results___files/__results___9_1.png)

![](https://www.kaggleusercontent.com/kf/86258839/eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..Se-_r--QoxyaDTJOBH2APQ.UmftqZcEl83h8ssskNmVEBr1UUep-gCPWecHInnFcOt7vWPh0bfuXWvSeXW23V6qgYes-4e4Ql2C1vlKQMllqm_4PwXePGIoWDGRIcBYmkOW6_pefWLfJWfzguyjY2-PvOcYLYNIfmzXhIBWR6ImCLOkW-8Dsgoa0TQWoWuaNNCIG1UPXnRecm0PXfe_JMO-ahF0txSu_bDX863gjy1dONNp2D_LQZfBqyrujFLgPYGarH54X0GGY0wkFy2hdvgxtGD66QzyP_gLHT90hfQDw9jb_5ZXfVSSGI4Kg2QhRenh8zODqJUJxvDkLBPH9yshYkzDbjSaxjXMjCcceqBrx2adWqigAUSmjmrAV9f4cR_aifm_pP5XbHQo56EiQJ4CLi9xFXZPu-wy5m1paqU7qeYH95qfv59UBRCdnwfypHIUDV-JM628FJcEkspBgz_qmr-MF7ubxY0c7VUWeIGQCb-1_Dtdou0bxN4tn7UPMTEZidpVzheuOwd6bIeOqUZBL10pTpM1kZaZmDWizHF77ce3QQTZ7ni0Cem-OQV7bEqhYI0GfSr8lKLrYFrW7O8cavAqPGx3lcd5uX4AZsLOAOy8GT0LGpEjhfLPuhZoNfJh1Dfc_jRkKP21O2TyveR_FeKviS--OeTgAFi7Gr-oSeLJy4M8C4DxvqOG-DCMf4k.b7jlWGViHMw7LqnNx2t5AA/__results___files/__results___9_2.png)


---
**References**

- Keras and Tensorflow documentation
- [Kaggle](https://www.kaggle.com/)
- http://introtodeeplearning.com/ - MIT Deep-Learning course