Meteor.startup(function () {
	if (Chats.find().count() !== 0) return;
 
  Messages.remove({});
 
  let messages = [
    {
      text: 'You on your way?',
      timestamp: moment().subtract(1, 'hours').toDate()
    },
    {
      text: 'Hey, it\'s me',
      timestamp: moment().subtract(2, 'hours').toDate()
    },
    {
      text: 'I should buy a boat',
      timestamp: moment().subtract(1, 'days').toDate()
    },
    {
      text: 'Look at my mukluks!',
      timestamp: moment().subtract(4, 'days').toDate()
    },
    {
      text: 'This is wicked good ice cream.',
      timestamp: moment().subtract(2, 'weeks').toDate()
    }
  ];
 
  messages.forEach((m) => {
    Messages.insert(m);
  });
 
  let chats = [
    {
      name: 'Ethan Gonzalez',
      picture: '/1.jpg'
    },
    {
      name: 'Bryan Wallace',
      picture: '/1.jpg'
    },
    {
      name: 'Avery Stewart',
      picture: '/1.jpg'
    },
    {
      name: 'Katie Peterson',
      picture: '/1.jpg'
    },
    {
      name: 'Ray Edwards',
      picture: '/1.jpg'
    }
  ];
 
  chats.forEach((chat) => {
    let message = Messages.findOne({chatId: {$exists: false}});
    chat.lastMessage = message;
    let chatId = Chats.insert(chat);
    Messages.update(message._id, {$set: {chatId: chatId}})
  });
});