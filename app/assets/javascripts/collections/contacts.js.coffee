class Everybody.Collections.Contacts extends Everybody.Collections.FilterableCollection
  model: Everybody.Models.Contact
  url: '/api/contacts'

  byGroup: (group) ->
    @filtered((contact) -> contact.byGroup(group))
