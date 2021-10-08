# Custom-Components
This repo consists custom components that React Native does not provide officially.


# 1. Lazy Image
Lazy image we can use many places in our routing project when we get image data from rest api that time it take some time that time we can handle image to using our component lazy
image
  for creating Lazy image we can cretae one component lazyImage using this we can handle it. lazy image we can take image tag and one indicatore For lazyimage component first we need to add "ActivityIndicator" from react-native
 
  
![image](https://user-images.githubusercontent.com/4476493/136534262-26d465fd-f924-47d2-a1e5-932314dc2c77.png)

 in this component we can also add imagestyle from other screen we add  
    
    imageWrapper,
    imageStyle,
    source,
    loader,
    loaderColor,

so we can add all above in props

for loader we use useState method from react we delcare variable
loaded variable default false but when image load successfully in tag that time we use setLoaded method to change loaded value that time we used onLoadEnd properties in image tag it callback when image is uploaded so we change variable value calling setLoaded method in image

![image](https://user-images.githubusercontent.com/4476493/136534951-9d4b15b0-80ea-4b53-bfd4-fbdbfb9a2dba.png)

![image](https://user-images.githubusercontent.com/4476493/136539453-1c6af3a7-6a43-44cb-8f10-ff124693653d.png)



now we need to set loader on image so we take one view and give position absolute to it when we used position absolute that time view is over on image tag so first we need style it like below

![image](https://user-images.githubusercontent.com/4476493/136539960-727362e7-7704-41b5-9416-9d58372e7aa7.png)

then after we can take indicatore view means loader view

![image](https://user-images.githubusercontent.com/4476493/136535331-280c2bf7-7b6b-420a-8cc3-9b812defb028.png)

whole componet code is below

![image](https://user-images.githubusercontent.com/4476493/136540426-0a101e87-744c-4838-92e3-e0daa614d3af.png)

# How can we use component in other screen

we import component from component folder (in my case i have one folder name as component) and use direct. you check below

![image](https://user-images.githubusercontent.com/4476493/136541631-20061f11-a1c6-46b7-ab4c-72bbb2faaaa3.png)

In default LazyImage you need only image url like below

![image](https://user-images.githubusercontent.com/4476493/136541788-fe596fb1-810d-4589-b938-9f551f5211ce.png)

you can also add loader color like below

![image](https://user-images.githubusercontent.com/4476493/136541936-efc63d92-5136-4aeb-bd5f-544d5a2b3d23.png)

you can also take your own Active indicator

![image](https://user-images.githubusercontent.com/4476493/136542325-75f8eb3b-ea98-44a4-9efb-753c6583e232.png)

whole code

![image](https://user-images.githubusercontent.com/4476493/136542866-1bb58f21-b1c7-454c-854f-ae06b36f1a04.png)


# output


![loader](https://user-images.githubusercontent.com/4476493/136544393-025be6d0-19eb-475e-b0d0-5fe71935cf04.gif)

# 2 
 

