class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :group
      t.text :notes
      t.text :address

      t.timestamps
    end
  end
end
