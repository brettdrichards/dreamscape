#pragma strict
var jumpH = 10;
var isFalling = false;

function Start () {

}

function Update () {

	transform.position.z = 0;

	 if (Input.GetKeyDown("w") && isFalling==false) {
	 	rigidbody.velocity.y = jumpH;
	 	isFalling = true;
	 }
	 if (Input.GetKeyDown("a")) {
	 	transform.position.x -= 1.0;
	 }
	 if (Input.GetKeyDown("d")) {
	 	transform.position.x += 1.0;
	 }
}

function OnCollisionStay () {
	isFalling = false;
}