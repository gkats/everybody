class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :name, null: false
      t.string :group, null: false
      t.text :address
      t.text :notes
      
      t.timestamps
    end
  end
end
