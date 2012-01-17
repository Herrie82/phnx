function RilLoginAssistant() {
	 var cookie = new Mojo.Model.Cookie("RilUser");
    try {
        this.rilUser = cookie.get();
    } catch (e) {Mojo.Log.error("this.rilUser");}
    var cookie = new Mojo.Model.Cookie("RilPass");
    try {
        this.rilPass = cookie.get();
    } catch (e) {Mojo.Log.error("this.rilPass");}
    var cookie = new Mojo.Model.Cookie("IppUser");
    try {
        this.ippUser = cookie.get();
    } catch (e) {Mojo.Log.error("this.ippUser");}
    var cookie = new Mojo.Model.Cookie("IppPass");
    try {
        this.ippPass = cookie.get();
    } catch (e) {Mojo.Log.error("this.ippPass");}
}

RilLoginAssistant.prototype.setup = function() {
    this.controller.setupWidget("rilUserFieldId",
		this.attributes = {
			hintText: $L("ReadItLater Username"),
			multiline: false,
			enterSubmits: false,
			autoFocus: true
		},
		this.RilUserValue =  {	
			value: "",
			disabled: false
		}
	);
    
	this.controller.setupWidget("rilPassFieldId",
    this.attributes = {
        hintText: $L("ReadItLater Password"),
        multiline: false,
        enterSubmits: false,
        autoFocus: false
    },
    this.RilPassValue = {
        value: "",
        disabled: false
    }
);
	this.controller.setupWidget("ippUserFieldId",
	this.attributes = {
        hintText: $L("InstaPaper Email"),
        multiline: false,
        enterSubmits: false,
        autoFocus: false
    },
    this.IpUserValue = {
        value: "",
        disabled: false
    }
);
	this.controller.setupWidget("ippPassFieldId",
	this.attributes = {
        hintText: $L("InstaPaper Password"),
        multiline: false,
        enterSubmits: false,
        autoFocus: false
    },
    this.IpPassValue = {
        value: "",
        disabled: false
    }
);
	 this.controller.setupWidget("loginRil",
         this.attributes = {
         	type: Mojo.Widget.defaultButton 
             },
         this.model = {
             label : "Login to ReaditLater",
             disabled: false
         }
     );
	 this.controller.setupWidget("loginIp",
         this.attributes = {
         	type: Mojo.Widget.defaultButton
             },
         this.model = {
             label : "Login to InstaPaper",
             disabled: false
         }
     );
    /*Mojo.Event.listen(this.controller.get("rilUserFieldId"),
Mojo.Event.propertyChange,
this.handleUpdateRilUser.bindAsEventListener(this));
    Mojo.Event.listen(this.controller.get("rilPassFieldId"),
Mojo.Event.propertyChange, this.handleUpdateRilPw.bindAsEventListener(this));
    Mojo.Event.listen(this.controller.get("ippUserFieldId"),
Mojo.Event.propertyChange, this.handleUpdateIpUser.bindAsEventListener(this));
    Mojo.Event.listen(this.controller.get("ippPassFieldId"),
Mojo.Event.propertyChange, this.handleUpdateIpPass.bindAsEventListener(this));*/
    Mojo.Event.listen(this.controller.get('loginRil'), Mojo.Event.tap,
this.logIntoRil.bindAsEventListener(this));
    Mojo.Event.listen(this.controller.get('loginIp'), Mojo.Event.tap,
this.logIntoIp.bindAsEventListener(this));




};    

RilLoginAssistant.prototype.logIntoRil = function(event) {  
 this.controller.stageController.popScene();
};

RilLoginAssistant.prototype.logIntoIp = function() {
  this.controller.stageController.popScene();
};

RilLoginAssistant.prototype.activate = function(event) {
	this.controller.get('rilUserFieldId').mojo.setValue(this.rilUser);
    this.controller.get('rilPassFieldId').mojo.setValue(this.rilPass);
    this.controller.get('ippUserFieldId').mojo.setValue(this.ippUser);
    this.controller.get('ippPassFieldId').mojo.setValue(this.ippPass)
    //Mojo.Log.error(this.RilUserValue.value);
};

RilLoginAssistant.prototype.deactivate = function(event) {
	this.rilUser = this.RilUserValue.value;
    this.rilPass = this.RilPassValue.value;
    this.ippUser = this.IpUserValue.value;
    this.ippPass = this.IpPassValue.value;
    var cookie = new Mojo.Model.Cookie("RilUser");
    cookie.put(this.rilUser);
    var cookie = new Mojo.Model.Cookie("RilPass");
    cookie.put(this.rilPass);
    var cookie = new Mojo.Model.Cookie("IppUser");
    cookie.put(this.ippUser);
    var cookie = new Mojo.Model.Cookie("IppPass");
    cookie.put(this.ippPass);
};

RilLoginAssistant.prototype.cleanup = function() {
	this.rilUser = this.RilUserValue.value;
	this.rilPass = this.RilPassValue.value;
	this.ippUser = this.IpUserValue.value;
	this.ippPass = this.IpPassValue.value;
	var cookie = new Mojo.Model.Cookie("RilUser");
	cookie.put(this.rilUser);
	var cookie = new Mojo.Model.Cookie("RilPass");
	cookie.put(this.rilPass);
	var cookie = new Mojo.Model.Cookie("IppUser");
	cookie.put(this.ippUser);
	var cookie = new Mojo.Model.Cookie("IppPass");
	cookie.put(this.ippPass);
};
