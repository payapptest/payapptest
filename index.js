ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

ec.order.extraFields.firstname = {
  'title': 'Имя',
  'type': 'text',
  'required': true,
  'checkoutDisplaySection': 'order_comments'
};

ec.order.extraFields.secondname = {
  'title': 'Фамилия',
  'type': 'text',
  'required': true,
  'checkoutDisplaySection': 'order_comments'
};

ec.order.extraFields.phone = {
  'title': 'Телефон',
  'type': 'text',
  'required': true,
  'checkoutDisplaySection': 'order_comments'
};

ec.order.extraFields.isRecurrent = {
  'title': 'Рекурентность',
  'type': 'text',
  'required': false,
  'checkoutDisplaySection': 'order_comments'
};

Ecwid.refreshConfig();
