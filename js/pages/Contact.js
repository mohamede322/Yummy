export default function Contact() {
  $(".search-container").addClass("d-none");
  const myData = $("#myData");
  let content = `          <div
  class="row w-75  position-absolute translate-middle top-50 start-50 gy-3"
>
  <div class="col-md-6">
    <input
      type="text"
      class="form-control mb-1"
      placeholder="Enter Your Name"
      id="name"
      name="name"
    />
    <div class="alert alert-danger d-none">
      Special characters and numbers not allowed
    </div>
  </div>
  <div class="col-md-6">
    <input
      type="email"
      class="form-control mb-1"
      placeholder="Enter Your Email"
      id="email"
      name="email"
    />
    <div class="alert alert-danger d-none">
      Email not valid *exemple@yyy.zzz
    </div>
  </div>
  <div class="col-md-6">
    <input
      type="text"
      class="form-control mb-1"
      placeholder="Enter Your Phone"
      id="phone"
      name="phone"
    />
    <div class="alert alert-danger d-none">
      Enter valid Phone Number
    </div>
  </div>
  <div class="col-md-6">
    <input
      type="number"
      class="form-control mb-1"
      placeholder="Enter Your Age"
      id="age"
      name="age"
    />
    <div class="alert alert-danger d-none">Enter valid age</div>
  </div>
  <div class="col-md-6">
    <input
      type="password"
      class="form-control mb-1"
      placeholder="Enter Your Password"
      id="password"
      name="password"
    />
    <div class="alert alert-danger d-none">
      Enter valid password *Minimum eight characters, at least one
      letter and one number:*
    </div>
  </div>
  <div class="col-md-6">
    <input
      type="password"
      class="form-control mb-1"
      placeholder="Repassword"
      id="repassword"
      name="repassword"
    />
    <div class="alert alert-danger d-none">
      Enter valid repassword
    </div>
  </div>
  <div class="btnWrapper text-center">
    <button
    id="submitBtn"
      class="disabled btn btn-outline-danger border border-danger"
    >
      Submit
    </button>
  </div>
</div>`;
  myData.html(content);
  let validForm = !1;
  let confirmedPassword = !1;
  let regEx = {
    name: /^[A-Za-z\s]+$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^(?:\+?\d{10,12}|\d{10,11})$/,
    age: /^([1-9]|[1-9][0-9])$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
  };
  function checkAllInputs(
    name,
    email,
    phone,
    age,
    password,
    confirmedPassword
  ) {
    if (
      regEx.name.test(name.val()) &&
      regEx.email.test(email.val()) &&
      regEx.phone.test(phone.val()) &&
      regEx.age.test(age.val()) &&
      regEx.password.test(password.val()) &&
      confirmedPassword
    ) {
      validForm = !0;
    } else {
      validForm = !1;
    }
  }
  $("input").on("input", (e) => {
    let input = $($(e.currentTarget));
    let objKey = input.attr("id");
    let val = input.val();
    if (objKey != "repassword") {
      regEx[objKey].test(val)
        ? input.siblings().addClass("d-none")
        : input.siblings().removeClass("d-none");
    }
    if (objKey == "password" || objKey == "repassword") {
      if ($("#password").val() === $("#repassword").val()) {
        confirmedPassword = !0;
        $("#repassword").siblings().addClass("d-none");
      } else {
        confirmedPassword = !1;
        $("#repassword").siblings().removeClass("d-none");
      }
    }
    if (val == "") {
      input.siblings().addClass("d-none");
    }
    checkAllInputs(
      $("#name"),
      $("#email"),
      $("#phone"),
      $("#age"),
      $("#password"),
      confirmedPassword
    );
    if (validForm) {
      $("#submitBtn").removeClass("disabled");
    } else {
      $("#submitBtn").addClass("disabled");
    }
  });
  $(".loader-container").fadeOut(500);
  return myData;
}
