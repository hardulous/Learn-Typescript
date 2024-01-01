// WHY INTERFACE IS IMP => Here interface is something that tell us that if we want to have certain feature in app it has to be implemented in a specific way. Let say we are building a mobile app which uses camera to take photo so we will create interface for taking photo and whoever want to create a feature related to taking photo can use this interface ::

interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

// Now any developer working in our project want to use photo feature must have to implement the above interface , Now how we take the photo is not defined by interface , Interface is something which never involves the defination it always bound us that these are must have things in order implement some feature ::

class Instagram implements TakePhoto {
  // Here Instagram feature is using the TakePhoto feature so have to implement the TakePhoto interface
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    this.cameraMode = cameraMode;
    this.filter = filter;
    this.burst = burst;
  }
}


// Now let say another developer have created a Youtube feature which again will use TakePhoto feature interface and implements it and apart from this it will implements other feature as well

interface Story{
    createStory(): void
}

class Youtube implements TakePhoto , Story{
    // Here Youtube feature is using the both TakePhoto and Story feature so have to implement both the interfaces
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    private story: string     // Can have its own property as well
  ) {
    this.cameraMode = cameraMode;
    this.filter = filter;
    this.burst = burst;
    this.story = story
  }

  // Implementing method for Story interface 
  createStory(): void {   
      console.log("CREATING STORY AND ADDED IN PROFILE")
  }
  
}