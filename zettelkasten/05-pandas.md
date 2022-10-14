---
title: Pandas
description: Pandas quick reference cheat-sheet
date: 2022-04-19
modified: 2022-04-20
category: zettelkasten
layout: post
---

# Pandas

Quick reference to the Python Pandas library.

```shell
$~ > pip install pandas
```

Import the package into your `.py` file.
```python
import pandas as pd
```

## Creating and writing data

**Using `dict`**

```python
df = pd.DataFrame({'Col_1': [34, 11], 'Col_2': [46, 79]})
```

```python
pd.DataFrame({'Col_1': ['some_data_1-1', 12], 
              'Col_2': ['some_data_1-2', 22]},
             index=['Row 1', 'Row 2'])
```

```python
pd.Series([1, 2, 3, 4, 5])
```

```python
pd.Series([11, 12, 13], index=['Row 1', 'Row 2', 'Row 3'], name='Col 1')
```

**Reading CSV**

```python
df_data = pd.read_csv("/data-source/data.csv")
```

```python
df_data.shape

>>> (no_rows, no_cols)
```

```python
df_data.head()

df_data.head(10)
```

```python
# Read the CSV and use the first column for the row index
df_data = pd.read_csv("/data-source/data.csv", index_col=0)
```

**Writing CSV**

```python
df_data.to_csv('to_data.csv')
```

## Indexing, selecting and assigning

```python
df_data = pd.DataFrame({'Col1': ['some_data_1_1', 12], 
			              'Col2': ['some_data_1_2', 22]},
			             index=['Row1', 'Row2'])
```

**Native accessors**

Accessing data from a column or a row of a column. A `DataFrame` can be considered to be a merge of `Series`.

```python
df_data.Col1

df_data['Col1']

df_data['Col1'][0]

>>> some_data_1_1
```

**Indexing**

Both `loc` and `iloc` are row-first, column-second.

Using `iloc`, index based selection:

```python
# Access the data of the first row
df_data.iloc[0]

# Access the data of all rows and first column
df_data.iloc[:, 0] 

df_data.iloc[1:3, 0] 

# indexing here is done based on the index column value
df_data.iloc[[1,2,3], 0] 

df_data.iloc[-5, 0] 

df_data.iloc[-5] # last 5 rows of all columns
```

Using `loc`, label based selection:

```python
# Access the data of the first row
df_data.loc[0, 'Col1']

>>> some_data_1_1

df_data.loc[:, ['Col1', 'Col2']]

```

`iloc` uses the Python stdlib indexing scheme, where the first element of the range is included and the last one excluded. So `0:10` will select entries `0,...,9`. `loc`, meanwhile, indexes inclusively. So `0:10` will select entries `0,...,10`.

**Manipulating indexes**

```python
df_data.set_index('col1')
```

**Selecting**

```python
reviews.country == 'Italy'

>>> 
0          True
1         False
          ...  
129969    False
129970    False
Name: country, Length: 129971, dtype: bool
```

```python
reviews.loc[reviews.country == 'Italy']

>>> # Return dataframe with all rows that are true
```

```python
reviews.loc[(reviews.country == 'Italy') & (reviews.points >= 90)]

reviews.loc[(reviews.country == 'Italy') | (reviews.points >= 90)]

>>> # Return dataframe with all rows that are true for the compund of conditions
```

**`isin`**

```python
# isin select from a list
reviews.loc[reviews.country.isin(['Italy', 'France'])]
```

 **`isnull` and `notnull`**
 
 Methods lets you highlight values which are (or are not) empty (`NaN`). For example, to filter out wines lacking a price tag in the dataset:

```python
# filters with the conditional
reviews.loc[reviews.price.notnull()]
```

**Assigning**

```python
# change all values in the column
reviews['critic'] = 'everyone'

# or with an iterable
reviews['index_backwards'] = range(len(reviews), 0, -1)

>>>
0         129971
1         129970
           ...  
129969         2
129970         1
Name: index_backwards, Length: 129971, dtype: int64
```


## Summary functions & maps

**Summaries**

```python
reviews.points.describe()

>>>
count    129971.000000
mean         88.447138
             ...      
75%          91.000000
max         100.000000
Name: points, Length: 8, dtype: float64

reviews.taster_name.describe()

>>>
count         103727
unique            19
top       Roger Voss
freq           25514
Name: taster_name, dtype: object

reviews.points.mean()

reviews.taster_name.unique()

reviews.taster_name.value_counts()


```

**Map functions**

[`map()`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.map.html) 

```python
review_points_mean = reviews.points.mean()
reviews.points.map(lambda p: p - review_points_mean)
```

The function you pass to `map()` should expect a single value from the Series (a point value, in the above example), and return a transformed version of that value. `map()` returns a new Series where all the values have been transformed by your function.

**Apply functions**

[`apply()`](https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.apply.html) is the equivalent method if we want to transform a whole DataFrame by calling a custom method on each row.

```python
def remean_points(row):
    row.points = row.points - review_points_mean
    return row

reviews.apply(remean_points, axis='columns')
```

If we had called `reviews.apply()` with `axis='index'`, then instead of passing a function to transform each row, we would need to give a function to transform each _column_.

Note that `map()` and `apply()` return new, transformed Series and DataFrames, respectively. They don't modify the original data they're called on. 

**Built-in mapping operations**

```python
review_points_mean = reviews.points.mean()
reviews.points - review_points_mean

>>>
0        -1.447138
1        -1.447138
            ...   
129969    1.552862
129970    1.552862
Name: points, Length: 129971, dtype: float64


reviews.country + " - " + reviews.region_1

>>>
0            Italy - Etna
1                     NaN
               ...       
129969    France - Alsace
129970    France - Alsace
Length: 129971, dtype: object
```

These operators are faster than `map()` or `apply()` because they use speed ups built into pandas. All of the standard Python operators (`>`, `<`, `==`, and so on) work in this manner. They are not as flexible as `map()` or `apply()`, for complex operations and conditions. 

## Grouping and sorting

**`groupby`**

```python
reviews.groupby('points').points.count()
# same can be achieved by .value_counts()

reviews.groupby('points').price.min()

>>>
points
80      5.0
81      5.0
       ... 
99     44.0
100    80.0
Name: price, Length: 21, dtype: float64
```

Each group generated can be considered as being a slice of our DataFrame containing only data with values that match. This DataFrame is accessible to directly using the `apply()` method.

```python
reviews.groupby('winery').apply(lambda df: df.title.iloc[0])

>>>
winery
1+1=3                          1+1=3 NV Rosé Sparkling (Cava)
10 Knots                 10 Knots 2010 Viognier (Paso Robles)
                                  ...                        
àMaurice    àMaurice 2013 Fred Estate Syrah (Walla Walla V...
Štoka                         Štoka 2009 Izbrani Teran (Kras)
Length: 16757, dtype: object
```

```python
reviews.groupby(['country', 'province']).apply(lambda df:df.loc[df.points.idxmax()])

reviews.groupby(['country']).price.agg([len, min, max])
```

**Multi index**

```python

countries_reviewed = reviews.groupby(['country','province']).description.agg([len])

mi = countries_reviewed.index


# the multi-index method you will use most often is the one for converting back to a regular index, the `reset_index()`
countries_reviewed.reset_index()
```

Multi-indices have several methods for dealing with their tiered structure which are absent for single-level indices. They also require two levels of labels to retrieve a value.

**Sorting**

To get data in the order we want it in, we can sort it ourselves.

```python
countries_reviewed = countries_reviewed.reset_index()
countries_reviewed.sort_values(by='len')

# descending
countries_reviewed.sort_values(by='len', ascending=False)

# by index
countries_reviewed.sort_index()

# by 2 values
countries_reviewed.sort_values(by=['country', 'len'])
```

## Dtype

```python
# Returns the data type. 
reviews.price.dtype

# Convert a int64 to float64
reviews.points.astype('float64')
```

**Missing data**

Missing values are given `NaN`. 

```python
# selecting a null from a column.
reviews[pd.isnull(reviews.country)]
```

**Filling missing values**

```python
reviews.region_2.fillna("Unknown")
# Fills all the NaNs with 'Unknown'
```

**Backfill strategy**

Fill each missing value with the first non-null value that appears sometime after the given record in the database. 

**Replace**

```python
reviews.taster_twitter_handle.replace("@kerinokeefe", "@kerino")
```

`replace()` method is worth mentioning here because it's handy for replacing missing data which is given some kind of sentinel value in the dataset: things like `"Unknown"`, `"Undisclosed"`, `"Invalid"`, and so on.

## Renaming and combining

```python
reviews.rename(columns={'points': 'score'})

# Renaming the index
reviews.rename(index={0: 'firstEntry', 1: 'secondEntry'})

# renaming the axis
reviews.rename_axis("wines", axis='rows').rename_axis("fields", axis='columns')
```

Using a `dict` is most convenient.

**Combining**

 Pandas has three core methods for doing this. In order of increasing complexity, these are `concat()`, `join()`, and `merge()`. Most of what `merge()` can do can also be done more simply with `join()`.

`concat` when the columns are the same.

```python
canadian_youtube = pd.read_csv("../input/youtube-new/CAvideos.csv")
british_youtube = pd.read_csv("../input/youtube-new/GBvideos.csv")

pd.concat([canadian_youtube, british_youtube])
```

`join()` lets you combine different DataFrame objects which have an index in common.

```python
left = canadian_youtube.set_index(['title', 'trending_date'])
right = british_youtube.set_index(['title', 'trending_date'])

left.join(right, lsuffix='_CAN', rsuffix='_UK')
```

---

**References**

- Pandas documentation
- [Kaggle](https://www.kaggle.com/)

**Sample DataFrame:** `reviews` 
<!-- 
<table class="dataframe">
    <thead>
        <tr style="text-align: right">
            <th></th>
            <th>country</th>
            <th>description</th>
            <th>designation</th>
            <th>points</th>
            <th>price</th>
            <th>province</th>
            <th>region_1</th>
            <th>region_2</th>
            <th>taster_name</th>
            <th>taster_twitter_handle</th>
            <th>title</th>
            <th>variety</th>
            <th>winery</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>0</th>
            <td>Italy</td>
            <td>
                Aromas include tropical fruit, broom, brimstone and
                dried herb. The palate isn't overly expressive,
                offering unripened apple, citrus and dried sage
                alongside brisk acidity.
            </td>
            <td>Vulkà Bianco</td>
            <td>87</td>
            <td>NaN</td>
            <td>Sicily &amp; Sardinia</td>
            <td>Etna</td>
            <td>NaN</td>
            <td>Kerin O’Keefe</td>
            <td>@kerinokeefe</td>
            <td>Nicosia 2013 Vulkà Bianco (Etna)</td>
            <td>White Blend</td>
            <td>Nicosia</td>
        </tr>
        <tr>
            <th>1</th>
            <td>Portugal</td>
            <td>
                This is ripe and fruity, a wine that is smooth while
                still structured. Firm tannins are filled out with
                juicy red berry fruits and freshened with acidity.
                It's already drinkable, although it will certainly
                be better from 2016.
            </td>
            <td>Avidagos</td>
            <td>87</td>
            <td>15.0</td>
            <td>Douro</td>
            <td>NaN</td>
            <td>NaN</td>
            <td>Roger Voss</td>
            <td>@vossroger</td>
            <td>Quinta dos Avidagos 2011 Avidagos Red (Douro)</td>
            <td>Portuguese Red</td>
            <td>Quinta dos Avidagos</td>
        </tr>
        <tr>
            <th>2</th>
            <td>US</td>
            <td>
                Tart and snappy, the flavors of lime flesh and rind
                dominate. Some green pineapple pokes through, with
                crisp acidity underscoring the flavors. The wine was
                all stainless-steel fermented.
            </td>
            <td>NaN</td>
            <td>87</td>
            <td>14.0</td>
            <td>Oregon</td>
            <td>Willamette Valley</td>
            <td>Willamette Valley</td>
            <td>Paul Gregutt</td>
            <td>@paulgwine</td>
            <td>Rainstorm 2013 Pinot Gris (Willamette Valley)</td>
            <td>Pinot Gris</td>
            <td>Rainstorm</td>
        </tr>
        <tr>
            <th>3</th>
            <td>US</td>
            <td>
                Pineapple rind, lemon pith and orange blossom start
                off the aromas. The palate is a bit more opulent,
                with notes of honey-drizzled guava and mango giving
                way to a slightly astringent, semidry finish.
            </td>
            <td>Reserve Late Harvest</td>
            <td>87</td>
            <td>13.0</td>
            <td>Michigan</td>
            <td>Lake Michigan Shore</td>
            <td>NaN</td>
            <td>Alexander Peartree</td>
            <td>NaN</td>
            <td>
                St. Julian 2013 Reserve Late Harvest Riesling (Lake
                Michigan Shore)
            </td>
            <td>Riesling</td>
            <td>St. Julian</td>
        </tr>
        <tr>
            <th>4</th>
            <td>US</td>
            <td>
                Much like the regular bottling from 2012, this comes
                across as rather rough and tannic, with rustic,
                earthy, herbal characteristics. Nonetheless, if you
                think of it as a pleasantly unfussy country wine,
                it's a good companion to a hearty winter stew.
            </td>
            <td>Vintner's Reserve Wild Child Block</td>
            <td>87</td>
            <td>65.0</td>
            <td>Oregon</td>
            <td>Willamette Valley</td>
            <td>Willamette Valley</td>
            <td>Paul Gregutt</td>
            <td>@paulgwine</td>
            <td>
                Sweet Cheeks 2012 Vintner's Reserve Wild Child Block
                Pinot Noir (Willamette Valley)
            </td>
            <td>Pinot Noir</td>
            <td>Sweet Cheeks</td>
        </tr>
    </tbody>
</table> -->