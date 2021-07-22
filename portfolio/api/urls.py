from django.urls import path 
from .views import Get_info , Add_details

urlpatterns = [
    path('info' ,  Get_info.as_view() ),
    path('add' , Add_details.as_view()),
]