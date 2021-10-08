# Custom-Components
This repo consists custom components that React Native does not provide officially.


# Lazy Image
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



we take one view to load loader

![image](https://user-images.githubusercontent.com/4476493/136535331-280c2bf7-7b6b-420a-8cc3-9b812defb028.png)



