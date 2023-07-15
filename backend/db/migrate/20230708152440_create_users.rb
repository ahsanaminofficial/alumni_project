class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|

      # DB authenticable
      t.string :email,              null: false, default: ""
      t.string :encrypted_password, null: false, default: ""
      t.string :username,           null: false, default: ""

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at

      ## Confirmable
      t.string   :confirmation_token
      t.datetime :confirmed_at
      t.datetime :confirmation_sent_at

      
      ## Lockable
      t.integer  :failed_attempts, default: 0, null: false # Only if lock strategy is :failed_attempts
      t.string   :unlock_token # Only if unlock strategy is :email or :both
      t.datetime :locked_at


      t.timestamps null: false

      
      ## own fields
      t.string :name
      t.string :department
      t.string :bio
      t.integer :graduating_year
      t.integer :study_year
      t.integer :degree_type
      t.string :school

      t.integer :user_type
      t.boolean :anonymous_account

      t.datetime :date_of_birth

    end

    add_index :users, :email,                   unique: true
    add_index :users, :username,                unique: true
    # add_index :users, :reset_password_token, unique: true
    # add_index :users, :confirmation_token,   unique: true
    # add_index :users, :unlock_token,         unique: true
  end
end
