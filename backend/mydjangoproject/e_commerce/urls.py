from django.urls import path
from . import views
urlpatterns=[path("",views.visit,name="visit"),path("login",views.login_page,name="login"),path("sign_up",views.sign_up,name="sign_up"),path("logout",views.logout_page,name="logout"),path("add_product",views.add_product,name="add_product")]