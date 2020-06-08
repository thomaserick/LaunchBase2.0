module.exports = {
  getAge: function (timestamp) {
    var today = new Date();
    var birthDate = new Date(timestamp);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  },

  date: function (timestamp) {
    const date = new Date(timestamp);

    //yyy
    const year = date.getUTCFullYear();

    //MM
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);

    //dd
    const day = `0${date.getUTCDate()}`.slice(-2);

    return `${year}-${month}-${day}`;
  },
};
