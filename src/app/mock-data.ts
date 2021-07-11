export const _i18n = {
    locale: 'en_US',
    translations: {
        "dashboard":"Dashboard",
        "profile":"Profile",
        "booking":"Booking"
    }
}


export const sidebar = [
    {
        "title":"dashboard"
    },
    {
        "title":"profile"
    },
]


export const Booking_form_template = [
    {
      "type":"textBox",
      "label":"Name",
    },
    {
      "type":"number",
      "label":"Age"
    },
    {
      "type":"select",
      "label":"favorite book",
      "options":["Jane Eyre","Pride and Prejudice","Wuthering Heights"]
    }
  ]