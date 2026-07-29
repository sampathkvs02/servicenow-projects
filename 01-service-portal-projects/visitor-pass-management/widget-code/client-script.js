api.controller = function() {
  var c = this;

  c.save = function() {

    c.server.get({
      action: "save",
      name: c.data.name,
      title: c.data.title,
      phone: c.data.phone,
      city: c.data.city,
      purpose: c.data.purpose
    }).then(function(response) {

      c.data = response.data;

    });

  };
};
