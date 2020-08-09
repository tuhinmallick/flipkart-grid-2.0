# flipkart-grid-2.0
## Fashion Intelligence System

Fashion is an industry that requires regular revamping and constant connect with the customer base. Fashion retailers try to draw inspiration from external sources like e-commerce sites and fashion magazines, however this is a intense manual process that requires time and efforts.
This project is an attempt to reduce above said dependencies and make the overall process more efficient for the retailers by providing them with a scalable tech solution to extract winning designs of apparel from openly available sources, so that the same can be incorporated in their designs of fashion products.

## Getting Started

In this section we shall describe the components of the project.

First of all we have the web scrapers that we have used for scraping the data from online sources. Sample code for the scraper is [here](https://github.com/IshitaB08/flipkart-grid-2.0/blob/master/flipkart_spider.py).

Then we have the web application that we have created to act as the interface with the users. Head over to the [fastfashion](https://github.com/IshitaB08/flipkart-grid-2.0/tree/master/fastfashion) folder for all the contents.

We have utilized the Attribute detection model and the in-shop recommender models. The code for the same is located in the [mm](https://github.com/IshitaB08/flipkart-grid-2.0/tree/master/mm) folder.

Finally, the code for the neural style transfer model can be found [here](https://github.com/IshitaB08/flipkart-grid-2.0/blob/master/style_transfer.ipynb).

## Brief Description

### 1. Web Scraper

To analyse the fashion trends we have divided the data extraction operations into three categories.
We have developed three separate web scrapers using Scrapy Framework for each category.

####  a. E-commerce Sites
  
    •This data is used to understand current consumer trends.
    
    •Extraction of the product’s image along with name, customer rating, price, brand, and product features.
  
####  b. Online Fashion Magazines / Trend Predicting Sites
  
    •This data is used to predict future trends in the market.
    
    •Extraction of the design’s image and accompanying description.

####  c. Social Media
  
    •This data is used to gauge the effect of promotions and endorsements on the consumer’s mentality.
    
    •Extraction of images, number of likes and number of followers on the page is done by providing trending hashtags as keywords.
    
### 2. Attribute Detection Model

    ● The Category and Attribute detector model takes in an image as an input and outputs the different categories and attributes of the cloth in the image.
    
    ● It is trained on the DeepFashion dataset and has its architecture similar to VGG-16 with an accuracy of 99.81% on top 5 predictions.
    
    ● This model uses the images scraped from e-commerce websites and trend-prediction websites to create a dashboard displaying the current fashion trends.
  
### 3. Fashion Recommender Model

    ● We believe that sometimes trend is not captured by a single piece of cloth alone, but rather a combination of different apparels.
    
    ● Our solution takes a single apparel like a t-shirt as input and recommends complete matching attires as outputs. The model is trained on the DeepFashion dataset and has an architecture similar to VGG-16.
    
### 4. Custom Design Creation using Neural Style Transfer

    ● We propose the use of Neural Style Transfer to help fashion retailers imprint their favourite designs on their favourite silhouettes!
    
    ● The images of trending silhouettes are passed as content images, while trending colours, patterns or textures and prints are passed as style images. The outputs from the style transfer algorithm are enhanced through SRCNN model.
    
### 5. Web Application

    ● The backend is built on Django framework and frontend using ReactJS.
    
    ● The scraped data after passing through the ML models will be available in the cloud storage for real-time retrieval.
    
    ● When the user queries a specific attribute, the images will be retrieved from the database and displayed as cards.
      For example, on querying floral, all images with floral designs will be displayed. Options will be given in the form of multiple drop-down menus so the retailer can mix and match different designs using the customization tool.

     ● The designer can also save all his designs on a single palette and use those prints and silhouettes in the style-transfer window to create custom designs.
    
 




