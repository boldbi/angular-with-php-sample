# BoldBI Embedding Angular with PHP Sample

This project was created using Angular 16 with PHP. This application aims to demonstrate how to render the dashboard available on your Bold BI server.

## Dashboard view

  ![Dashboard view](https://github.com/bold-bi/embedded-bi-samples/assets/129487075/fb69df74-a860-4539-be00-7e83a33e2e38)

## Prerequisites

The samples require the following requirements to run.

 * [PHP](https://windows.php.net/download/)
 * [Visual Studio Code](https://code.visualstudio.com/download)
 
#### Supported browsers
  
  * Google Chrome, Microsoft Edge, and Mozilla Firefox.

## Configuration

  * Please [get](https://github.com/boldbi/angular-with-php-sample/tree/master) the Angular with PHP sample from GitHub.

  * Please ensure you have enabled embed authentication on the `embed settings` page. If it is not currently enabled, please refer to the following image or detailed [instructions](https://help.boldbi.com/site-administration/embed-settings/#get-embed-secret-code) to enable it.

    ![Embed Settings](https://github.com/boldbi/aspnet-core-sample/assets/91586758/b3a81978-9eb4-42b2-92bb-d1e2735ab007)

  * To download the `embedConfig.json` file, please follow this [link](https://help.boldbi.com/site-administration/embed-settings/#get-embed-configuration-file) for reference. Additionally, you can refer to the following image for visual guidance.

    ![Embed Settings Download](https://github.com/boldbi/aspnet-core-sample/assets/91586758/d27d4cfc-6a3e-4c34-975e-f5f22dea6172)

    ![EmbedConfig Properties](https://github.com/boldbi/aspnet-core-sample/assets/91586758/d6ce925a-0d4c-45d2-817e-24d6d59e0d63)

  * Copy the downloaded `embedConfig.json` file and paste it into the designated [location](https://github.com/boldbi/angular-with-php-sample/tree/master) within the application. Please ensure you have placed it in the application, as shown in the following image.
    
    ![EmbedConfig image](https://github.com/bold-bi/embedded-bi-samples/assets/129487075/6d18d071-3a23-4218-a2dd-ff18742009dc)

## Run a PHP Sample
 
 * Open the PHP sample in visual studio code or any respective IDE.
 
 * Ensure whether embedConfig file is located in following location, `PHP/embedConfig.json` and run the PHP application using the respective IDE or using visual studio code.

## Run a Angular Sample Using Command Line Interface 
    
  * Open the command line interface and navigate to the specified file [location](https://github.com/boldbi/angular-with-php-sample) where the project is located.
   
  * To install all dependent packages, use the following command `npm install`.
 
  * Finally, run the application using the following command `npm start`.  After the application has started, it will display a URL in the `command line interface`, typically something like (e.g., http://localhost:4200/). Copy this URL and paste it into your default web browser.

## Developer IDE

  * [Visual Studio Code](https://code.visualstudio.com/download)

## Run a Angular Sample Using Visual Studio Code

 * Open the Angular sample in **Visual Studio Code**.

 * Install all dependent packages, use the below command

   ```bash
     npm install
   ```

 * Run the Angular sample, use the below command

   ```bash
     npm start
   ```

 * After the application has started, it will display a URL in the `command line interface`, typically something like (e.g., http://localhost:4200/). Copy this URL and paste it into your default web browser. 

    ![dashboard view](https://github.com/bold-bi/embedded-bi-samples/assets/129487075/c889714a-1541-4b97-80a2-5b5f4617caa9)

## Online Demos

Look at the Bold BI Embedding sample to live demo [here](https://samples.boldbi.com/embed).

## Documentation

A complete Bold BI Embedding documentation can be found on [Bold BI Embedding Help](https://help.boldbi.com/embedded-bi/javascript-based/).
