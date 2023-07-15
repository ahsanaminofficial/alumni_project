class UserController < ApplicationController

    def signin
        user = User.find_by(:email => params[:email])

        if user.present? && params[:encrypted_password] == user.encrypted_password
            reset_session
            session[:current_user_id] = user.id
            render :json => {"message" => "Successfully logged in!"}
        else
            render :json => {"message" => "Login unsuccessful"}
        end


    end

    def current_user
        Current.user ||= session[:current_user_id] && User.find_by(id: session[:current_user_id])
    end

    def set_current_user
        if session[:current_user_id]
            @current_user = User.find_by(id: session[:current_user_id])
        end
    end

    def index

        render :json => @current_user.to_json

    end


    def show

    end


    def new
    
    end

    def create
        # render :json => {"success" => "done!"}
        new_user = User.new(signup_params)

        if new_user.encrypted_password != params[:password_confirmation]
            render :json => {"error" => "passwords don't match"}
        end

        if new_user.save
            render :json => {"success" => "user created!"}
        else
            render :json => {"error" => "not saved!"}
        end


    end

    def edit

    end

    def update

    end

    def destroy

    end

    private

    def signup_params
        params.require(:user).permit(:email, :encrypted_password, :name, :department, :bio, :graduating_year, :study_year, :degree_type, :school, :date_of_birth, :anonymous_account)
    end

    def signin_params
        params.require(:user).permit(:email, :encrypted_password)
    end

end
