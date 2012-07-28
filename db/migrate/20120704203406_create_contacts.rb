class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :group
      t.text :address
      t.text :notes

      t.timestamps
    end
  end
end
