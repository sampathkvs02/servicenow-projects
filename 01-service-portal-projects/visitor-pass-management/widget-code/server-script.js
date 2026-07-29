(function() {

  if (input && input.action == "save") {

    var gr = new GlideRecord("u_visitors_table");

    gr.initialize();

    gr.u_name = input.name;
    gr.u_title = input.title;
    gr.u_mobile_number = input.phone;
    gr.u_place = input.city;
    gr.u_purpose_of_the_visit = input.purpose;

    gr.u_user_id =
      "VIS" + new GlideDateTime().getNumericValue();

    gr.insert();

    data.showCard = true;

    data.name = input.name;
    data.title = input.title;
    data.city = input.city;
    data.phone = input.phone;
    data.purpose = input.purpose;

    data.userid =
      gr.getValue("u_user_id");

    data.date =
      new GlideDate().getDisplayValue();

  }

})();
