class Contact < ActiveRecord::Base
  attr_accessible :address, :group, :name, :notes
end
