"use strict";(self.webpackChunkkrishadi_com=self.webpackChunkkrishadi_com||[]).push([[520],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(t),c=r,g=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return t?a.createElement(g,i(i({ref:n},d),{},{components:t})):a.createElement(g,i({ref:n},d))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},881:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const l={slug:"/pandas",title:"Pandas",description:"Pandas quick reference cheat-sheet",published:"4/19/2022",last_update:{date:"4/20/2022"}},i="Pandas",o={unversionedId:"kast/pandas",id:"kast/pandas",title:"Pandas",description:"Pandas quick reference cheat-sheet",source:"@site/zettelkasten/kast/04-pandas.md",sourceDirName:"kast",slug:"/pandas",permalink:"/zettelkasten/pandas",draft:!1,tags:[],version:"current",lastUpdatedAt:1650405600,formattedLastUpdatedAt:"Apr 19, 2022",sidebarPosition:4,frontMatter:{slug:"/pandas",title:"Pandas",description:"Pandas quick reference cheat-sheet",published:"4/19/2022",last_update:{date:"4/20/2022"}},sidebar:"zettelkastenSidebar",previous:{title:"Machine Learning",permalink:"/zettelkasten/machine-learning"},next:{title:"Deep Learning",permalink:"/zettelkasten/deep-learning"}},p={},s=[{value:"Creating and writing data",id:"creating-and-writing-data",level:2},{value:"Indexing, selecting and assigning",id:"indexing-selecting-and-assigning",level:2},{value:"Summary functions &amp; maps",id:"summary-functions--maps",level:2},{value:"Grouping and sorting",id:"grouping-and-sorting",level:2},{value:"Dtype",id:"dtype",level:2},{value:"Renaming and combining",id:"renaming-and-combining",level:2}],d={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pandas"},"Pandas"),(0,r.kt)("p",null,"Quick reference to the Python Pandas library."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ pip install pandas\n")),(0,r.kt)("p",null,"Import the package into your ",(0,r.kt)("inlineCode",{parentName:"p"},".py")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n")),(0,r.kt)("h2",{id:"creating-and-writing-data"},"Creating and writing data"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Using ",(0,r.kt)("inlineCode",{parentName:"strong"},"dict"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df = pd.DataFrame({'Col_1': [34, 11], 'Col_2': [46, 79]})\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pd.DataFrame({'Col_1': ['some_data_1-1', 12],\n              'Col_2': ['some_data_1-2', 22]},\n             index=['Row 1', 'Row 2'])\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pd.Series([1, 2, 3, 4, 5])\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pd.Series([11, 12, 13], index=['Row 1', 'Row 2', 'Row 3'], name='Col 1')\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reading CSV")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'df_data = pd.read_csv("/data-source/data.csv")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df_data.shape\n\n>>> (no_rows, no_cols)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df_data.head()\n\ndf_data.head(10)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Read the CSV and use the first column for the row index\ndf_data = pd.read_csv("/data-source/data.csv", index_col=0)\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Writing CSV")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df_data.to_csv('to_data.csv')\n")),(0,r.kt)("h2",{id:"indexing-selecting-and-assigning"},"Indexing, selecting and assigning"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df_data = pd.DataFrame({'Col1': ['some_data_1_1', 12],\n                          'Col2': ['some_data_1_2', 22]},\n                         index=['Row1', 'Row2'])\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Native accessors")),(0,r.kt)("p",null,"Accessing data from a column or a row of a column. A ",(0,r.kt)("inlineCode",{parentName:"p"},"DataFrame")," can be considered to be a merge of ",(0,r.kt)("inlineCode",{parentName:"p"},"Series"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df_data.Col1\n\ndf_data['Col1']\n\ndf_data['Col1'][0]\n\n>>> some_data_1_1\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Indexing")),(0,r.kt)("p",null,"Both ",(0,r.kt)("inlineCode",{parentName:"p"},"loc"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"iloc"),"\xa0are row-first, column-second."),(0,r.kt)("p",null,"Using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"iloc"),", index based selection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Access the data of the first row\ndf_data.iloc[0]\n\n# Access the data of all rows and first column\ndf_data.iloc[:, 0]\n\ndf_data.iloc[1:3, 0]\n\n# indexing here is done based on the index column value\ndf_data.iloc[[1,2,3], 0]\n\ndf_data.iloc[-5, 0]\n\ndf_data.iloc[-5] # last 5 rows of all columns\n")),(0,r.kt)("p",null,"Using\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"loc"),", label based selection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Access the data of the first row\ndf_data.loc[0, 'Col1']\n\n>>> some_data_1_1\n\ndf_data.loc[:, ['Col1', 'Col2']]\n\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"iloc"),"\xa0uses the Python stdlib indexing scheme, where the first element of the range is included and the last one excluded. So\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"0:10"),"\xa0will select entries\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"0,...,9"),".\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"loc"),", meanwhile, indexes inclusively. So\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"0:10"),"\xa0will select entries\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"0,...,10"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Manipulating indexes")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df_data.set_index('col1')\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Selecting")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"reviews.country == 'Italy'\n\n>>>\n0          True\n1         False\n          ...\n129969    False\n129970    False\nName: country, Length: 129971, dtype: bool\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"reviews.loc[reviews.country == 'Italy']\n\n>>> # Return dataframe with all rows that are true\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"reviews.loc[(reviews.country == 'Italy') & (reviews.points >= 90)]\n\nreviews.loc[(reviews.country == 'Italy') | (reviews.points >= 90)]\n\n>>> # Return dataframe with all rows that are true for the compund of conditions\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"isin"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# isin select from a list\nreviews.loc[reviews.country.isin(['Italy', 'France'])]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"isnull")," and\xa0",(0,r.kt)("inlineCode",{parentName:"strong"},"notnull"))),(0,r.kt)("p",null,"Methods lets you highlight values which are (or are not) empty (",(0,r.kt)("inlineCode",{parentName:"p"},"NaN"),"). For example, to filter out wines lacking a price tag in the dataset:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# filters with the conditional\nreviews.loc[reviews.price.notnull()]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Assigning")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# change all values in the column\nreviews['critic'] = 'everyone'\n\n# or with an iterable\nreviews['index_backwards'] = range(len(reviews), 0, -1)\n\n>>>\n0         129971\n1         129970\n           ...\n129969         2\n129970         1\nName: index_backwards, Length: 129971, dtype: int64\n")),(0,r.kt)("h2",{id:"summary-functions--maps"},"Summary functions & maps"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Summaries")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"reviews.points.describe()\n\n>>>\ncount    129971.000000\nmean         88.447138\n             ...\n75%          91.000000\nmax         100.000000\nName: points, Length: 8, dtype: float64\n\nreviews.taster_name.describe()\n\n>>>\ncount         103727\nunique            19\ntop       Roger Voss\nfreq           25514\nName: taster_name, dtype: object\n\nreviews.points.mean()\n\nreviews.taster_name.unique()\n\nreviews.taster_name.value_counts()\n\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Map functions")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/pandas-docs/stable/generated/pandas.Series.map.html"},(0,r.kt)("inlineCode",{parentName:"a"},"map()"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"review_points_mean = reviews.points.mean()\nreviews.points.map(lambda p: p - review_points_mean)\n")),(0,r.kt)("p",null,"The function you pass to\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"map()"),"\xa0should expect a single value from the Series (a point value, in the above example), and return a transformed version of that value.\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"map()"),"\xa0returns a new Series where all the values have been transformed by your function."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Apply functions")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/pandas-docs/stable/generated/pandas.DataFrame.apply.html"},(0,r.kt)("inlineCode",{parentName:"a"},"apply()")),"\xa0is the equivalent method if we want to transform a whole DataFrame by calling a custom method on each row."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def remean_points(row):\n    row.points = row.points - review_points_mean\n    return row\n\nreviews.apply(remean_points, axis='columns')\n")),(0,r.kt)("p",null,"If we had called\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"reviews.apply()"),"\xa0with\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"axis='index'"),", then instead of passing a function to transform each row, we would need to give a function to transform each\xa0",(0,r.kt)("em",{parentName:"p"},"column"),"."),(0,r.kt)("p",null,"Note that\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"map()"),"\xa0and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"apply()"),"\xa0return new, transformed Series and DataFrames, respectively. They don't modify the original data they're called on."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Built-in mapping operations")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'review_points_mean = reviews.points.mean()\nreviews.points - review_points_mean\n\n>>>\n0        -1.447138\n1        -1.447138\n            ...\n129969    1.552862\n129970    1.552862\nName: points, Length: 129971, dtype: float64\n\n\nreviews.country + " - " + reviews.region_1\n\n>>>\n0            Italy - Etna\n1                     NaN\n               ...\n129969    France - Alsace\n129970    France - Alsace\nLength: 129971, dtype: object\n')),(0,r.kt)("p",null,"These operators are faster than\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"map()"),"\xa0or\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"apply()"),"\xa0because they use speed ups built into pandas. All of the standard Python operators (",(0,r.kt)("inlineCode",{parentName:"p"},">"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"<"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"=="),", and so on) work in this manner. They are not as flexible as\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"map()"),"\xa0or\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"apply()"),", for complex operations and conditions."),(0,r.kt)("h2",{id:"grouping-and-sorting"},"Grouping and sorting"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"groupby"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"reviews.groupby('points').points.count()\n# same can be achieved by .value_counts()\n\nreviews.groupby('points').price.min()\n\n>>>\npoints\n80      5.0\n81      5.0\n       ...\n99     44.0\n100    80.0\nName: price, Length: 21, dtype: float64\n")),(0,r.kt)("p",null,"Each group generated can be considered as being a slice of our DataFrame containing only data with values that match. This DataFrame is accessible to directly using the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"apply()"),"\xa0method."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"reviews.groupby('winery').apply(lambda df: df.title.iloc[0])\n\n>>>\nwinery\n1+1=3                          1+1=3 NV Ros\xe9 Sparkling (Cava)\n10 Knots                 10 Knots 2010 Viognier (Paso Robles)\n                                  ...\n\xe0Maurice    \xe0Maurice 2013 Fred Estate Syrah (Walla Walla V...\n\u0160toka                         \u0160toka 2009 Izbrani Teran (Kras)\nLength: 16757, dtype: object\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"reviews.groupby(['country', 'province']).apply(lambda df:df.loc[df.points.idxmax()])\n\nreviews.groupby(['country']).price.agg([len, min, max])\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Multi index")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\ncountries_reviewed = reviews.groupby(['country','province']).description.agg([len])\n\nmi = countries_reviewed.index\n\n\n# the multi-index method you will use most often is the one for converting back to a regular index, the\xa0`reset_index()`\ncountries_reviewed.reset_index()\n")),(0,r.kt)("p",null,"Multi-indices have several methods for dealing with their tiered structure which are absent for single-level indices. They also require two levels of labels to retrieve a value."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sorting")),(0,r.kt)("p",null,"To get data in the order we want it in, we can sort it ourselves."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"countries_reviewed = countries_reviewed.reset_index()\ncountries_reviewed.sort_values(by='len')\n\n# descending\ncountries_reviewed.sort_values(by='len', ascending=False)\n\n# by index\ncountries_reviewed.sort_index()\n\n# by 2 values\ncountries_reviewed.sort_values(by=['country', 'len'])\n")),(0,r.kt)("h2",{id:"dtype"},"Dtype"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Returns the data type.\nreviews.price.dtype\n\n# Convert a int64 to float64\nreviews.points.astype('float64')\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Missing data")),(0,r.kt)("p",null,"Missing values are given ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# selecting a null from a column.\nreviews[pd.isnull(reviews.country)]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Filling missing values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"reviews.region_2.fillna(\"Unknown\")\n# Fills all the NaNs with 'Unknown'\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Backfill strategy")),(0,r.kt)("p",null,"Fill each missing value with the first non-null value that appears sometime after the given record in the database."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Replace")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'reviews.taster_twitter_handle.replace("@kerinokeefe", "@kerino")\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"replace()"),"\xa0method is worth mentioning here because it's handy for replacing missing data which is given some kind of sentinel value in the dataset: things like\xa0",(0,r.kt)("inlineCode",{parentName:"p"},'"Unknown"'),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},'"Undisclosed"'),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},'"Invalid"'),", and so on."),(0,r.kt)("h2",{id:"renaming-and-combining"},"Renaming and combining"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"reviews.rename(columns={'points': 'score'})\n\n# Renaming the index\nreviews.rename(index={0: 'firstEntry', 1: 'secondEntry'})\n\n# renaming the axis\nreviews.rename_axis(\"wines\", axis='rows').rename_axis(\"fields\", axis='columns')\n")),(0,r.kt)("p",null,"Using a ",(0,r.kt)("inlineCode",{parentName:"p"},"dict")," is most convenient."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Combining")),(0,r.kt)("p",null,"Pandas has three core methods for doing this. In order of increasing complexity, these are\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"concat()"),",\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"join()"),", and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"merge()"),". Most of what\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"merge()"),"\xa0can do can also be done more simply with\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"join()"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"concat")," when the columns are the same."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'canadian_youtube = pd.read_csv("../input/youtube-new/CAvideos.csv")\nbritish_youtube = pd.read_csv("../input/youtube-new/GBvideos.csv")\n\npd.concat([canadian_youtube, british_youtube])\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"join()"),"\xa0lets you combine different DataFrame objects which have an index in common."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"left = canadian_youtube.set_index(['title', 'trending_date'])\nright = british_youtube.set_index(['title', 'trending_date'])\n\nleft.join(right, lsuffix='_CAN', rsuffix='_UK')\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"References")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pandas documentation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.kaggle.com/"},"Kaggle"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sample DataFrame:")," ",(0,r.kt)("inlineCode",{parentName:"p"},"reviews")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"country"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"designation"),(0,r.kt)("th",{parentName:"tr",align:null},"points"),(0,r.kt)("th",{parentName:"tr",align:null},"price"),(0,r.kt)("th",{parentName:"tr",align:null},"province"),(0,r.kt)("th",{parentName:"tr",align:null},"region_1"),(0,r.kt)("th",{parentName:"tr",align:null},"region_2"),(0,r.kt)("th",{parentName:"tr",align:null},"taster_name"),(0,r.kt)("th",{parentName:"tr",align:null},"taster_twitter_handle"),(0,r.kt)("th",{parentName:"tr",align:null},"title"),(0,r.kt)("th",{parentName:"tr",align:null},"variety"),(0,r.kt)("th",{parentName:"tr",align:null},"winery"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Italy"),(0,r.kt)("td",{parentName:"tr",align:null},"Aromas include tropical fruit, broom, brimstone and dried herb. The palate isn't overly expressive offering unripened apple, citrus and dried sage alongside brisk acidity."),(0,r.kt)("td",{parentName:"tr",align:null},"Vulk\xe0 Bianco"),(0,r.kt)("td",{parentName:"tr",align:null},"87"),(0,r.kt)("td",{parentName:"tr",align:null},"NaN"),(0,r.kt)("td",{parentName:"tr",align:null},"Sicily ","&"," Sardinia"),(0,r.kt)("td",{parentName:"tr",align:null},"Etna"),(0,r.kt)("td",{parentName:"tr",align:null},"NaN"),(0,r.kt)("td",{parentName:"tr",align:null},"Kerin O\u2019Keefe"),(0,r.kt)("td",{parentName:"tr",align:null},"@kerinokeefe"),(0,r.kt)("td",{parentName:"tr",align:null},"Nicosia 2013 Vulk\xe0 Bianco (Etna)"),(0,r.kt)("td",{parentName:"tr",align:null},"White Blend")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Portugal"),(0,r.kt)("td",{parentName:"tr",align:null},"This is ripe and fruity, a wine that is smooth while still structured. Firm tannins are filled out with juicy red berry fruits and freshened with acidity. It's already drinkable, although it will certainly be better from 2016."),(0,r.kt)("td",{parentName:"tr",align:null},"Avidagos"),(0,r.kt)("td",{parentName:"tr",align:null},"87"),(0,r.kt)("td",{parentName:"tr",align:null},"15.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Douro"),(0,r.kt)("td",{parentName:"tr",align:null},"NaN"),(0,r.kt)("td",{parentName:"tr",align:null},"NaN"),(0,r.kt)("td",{parentName:"tr",align:null},"Roger Voss"),(0,r.kt)("td",{parentName:"tr",align:null},"@vossroger"),(0,r.kt)("td",{parentName:"tr",align:null},"Quinta dos Avidagos 2011 Avidagos Red (Douro)"),(0,r.kt)("td",{parentName:"tr",align:null},"Portuguese Red")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"US"),(0,r.kt)("td",{parentName:"tr",align:null},"Tart and snappy, the flavors of lime flesh and rind dominate. Some green pineapple pokes through, with crisp acidity underscoring the flavors. The wine was all stainless-steel fermented."),(0,r.kt)("td",{parentName:"tr",align:null},"NaN"),(0,r.kt)("td",{parentName:"tr",align:null},"87"),(0,r.kt)("td",{parentName:"tr",align:null},"14.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Oregon"),(0,r.kt)("td",{parentName:"tr",align:null},"Willamette Valley"),(0,r.kt)("td",{parentName:"tr",align:null},"Willamette Valley"),(0,r.kt)("td",{parentName:"tr",align:null},"Paul Gregutt"),(0,r.kt)("td",{parentName:"tr",align:null},"@paulgwine"),(0,r.kt)("td",{parentName:"tr",align:null},"Rainstorm 2013 Pinot Gris (Willamette Valley)"),(0,r.kt)("td",{parentName:"tr",align:null},"Pinot Gris")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"US"),(0,r.kt)("td",{parentName:"tr",align:null},"Pineapple rind, lemon pith and orange blossom start off the aromas. The palate is a bit more opulent, with notes of honey-drizzled guava and mango giving way to a slightly astringent, semidry finish."),(0,r.kt)("td",{parentName:"tr",align:null},"Reserve Late Harvest"),(0,r.kt)("td",{parentName:"tr",align:null},"87"),(0,r.kt)("td",{parentName:"tr",align:null},"13.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Michigan"),(0,r.kt)("td",{parentName:"tr",align:null},"Lake Michigan Shore"),(0,r.kt)("td",{parentName:"tr",align:null},"NaN"),(0,r.kt)("td",{parentName:"tr",align:null},"Alexander Peartree"),(0,r.kt)("td",{parentName:"tr",align:null},"NaN"),(0,r.kt)("td",{parentName:"tr",align:null},"St. Julian 2013 Reserve Late Harvest Riesling (Lake Michigan Shore)"),(0,r.kt)("td",{parentName:"tr",align:null},"Riesling")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"US"),(0,r.kt)("td",{parentName:"tr",align:null},"Much like the regular bottling from 2012, this comes across as rather rough and tannic, with rustic, earthy, herbal characteristics. Nonetheless, if you think of it as a pleasantly unfussy country wine, it's a good companion to a hearty winter stew."),(0,r.kt)("td",{parentName:"tr",align:null},"Vintner's Reserve Wild Child Block"),(0,r.kt)("td",{parentName:"tr",align:null},"87"),(0,r.kt)("td",{parentName:"tr",align:null},"65.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Oregon"),(0,r.kt)("td",{parentName:"tr",align:null},"Willamette Valley"),(0,r.kt)("td",{parentName:"tr",align:null},"Willamette Valley"),(0,r.kt)("td",{parentName:"tr",align:null},"Paul Gregutt"),(0,r.kt)("td",{parentName:"tr",align:null},"@paulgwine"),(0,r.kt)("td",{parentName:"tr",align:null},"Sweet Cheeks 2012 Vintner's Reserve Wild Child Block Pinot Noir (Willamette Valley)"),(0,r.kt)("td",{parentName:"tr",align:null},"Pinot Noir")))))}m.isMDXComponent=!0}}]);