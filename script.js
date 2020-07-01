let clk = document.getElementById("verify_e");
clk.onclick = function() {
	let email_verify = document.createElement("input");
	email_verify.id = "email_otp";
	email_verify.type = "numbers";
	email_verify.placeholder="enter OTP";
	email_verify.name="numbers";
	let insert = document.getElementById("fun");
	insert.insertBefore(email_verify, insert[3]);
	insert.removeChild(insert[4]);
}
clk = document.getElementById("verify_m");
clk.onclick = function(){
	let mob = document.createElement("input");
	mob.type = "numbers";
	mob.id = "mob_otp";
	mob.placeholder = "mobile OTP";
	mob.name="numbers";
	let it = document.getElementById("fun");
	it.insertBefore(mob, it[5]);
	it.removeChild(it[6]);
}
let insert = document.getElementById("year");
for(i=1950; i<=2020; i++)
{
	let it= document.createElement("option");
	it.value = i;
	it.innerHTML = i;
	insert.appendChild(it);
}
let dp = document.getElementById("date");
for(i=1;i<=28;i++)
{
	let it= document.createElement("option");
	it.value = i;
	it.innerHTML = i;
	dp.appendChild(it);
}
