// ABSTRACT IN TS => An abstract method or abstract field is one that hasn’t had an implementation provided. These members must exist inside an abstract class, which cannot be directly instantiated. The role of abstract classes is to serve as a base class for subclasses which do implement all the abstract members. When a class doesn’t have any abstract members, it is said to be concrete. An abstract class can have both abstract members and non abstract members as well.The object of abstract class can not be made instead the subclass which implements the abstract class their object can be made. EX ::

abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {
    this.cameraMode = cameraMode;
    this.filter = filter;
  }

  abstract takePhoto(): string   // Here only overview of what method will do but no defination

  getPhotoMode(): string{       // An abstract class can have actual method as well
    // Any login inside it
    return "Portrait"
  }

  //  ##### NOTE ::  Here the thing that made abstract class different from interface as both deliver same "overview only" feature and sub class have to implement those feature is that in abstract class we can have non abstract member as well that is defined method and property but in interface we can not have such defined method and property and these defined methods and property will be available to sub classes as well. 

}

// const obj1 = new TakePhoto("ew","ew")   // Here cannot create instance of abstract class 

class Instagram extends TakePhoto {

    constructor(public cameraMode: string, public filter: string) {
        super(cameraMode,filter)   // Since inherting a class so have to call constructor of base class 
    }

    takePhoto(): string {           // Here implementing abstract method takePhoto()
        return "Taking Photo..."
    }
}

const obj2 = new Instagram("Portrail","sepia")   // Now object of sub class which have implemented all abstract member can be created
