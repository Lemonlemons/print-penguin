class SessionsController < Devise::SessionsController
  # POST /resource/sign_in
  def create
    super
    cookies[:username] = current_user.email
  end

  # GET /resource/sign_out
  def destroy
    super
  end
end
