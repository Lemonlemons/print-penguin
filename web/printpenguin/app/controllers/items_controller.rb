class ItemsController < BaseController
  def index
    if current_user != nil
      redirect_to cart_item_path(current_user)
    else
    end
  end

  def update
    if current_user != nil
      @item = Item.find(params[:id])
      if @item.update_attributes(item_params)
        redirect_to cart_item_path(current_user)
      else
        redirect_to cart_item_path(current_user), notice: "Something went wrong"
      end
    else
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    redirect_to cart_item_path(current_user)
  end

  def cart
    user = User.find(params[:id])
    if user != nil
      @items = Item.where("user_id = ? AND is_ordered = ?", user.id, false)
    else
      redirect_to items_path, alert: "Please Log In"
    end
  end

  def create
    height = params['Height']
    width = params['Width']
    url = params['Url']
    email = params['User']
    mediatype = params['Mediatype']

    user = User.where(email: email).first

    item = Item.new(height: height, width: width, mediaurl: url, user_id: user.id, mediadatatype: mediatype, title: "11 x 17 Glossy Poster", description: "A medium sized poster perfect for any room")

    if item.save
      render js: "alert('success');"
    else
      render js: "alert('failure');"
    end
  end

  def item_params
    params.require(:item).permit(:title, :description, :height, :width, :mediaurl, :user_id, :mediadatatype, :quantity,
    :printype, :printwidth, :printheight, :frame_id, :album_id, :is_ordered, :is_shipped )
  end
end
