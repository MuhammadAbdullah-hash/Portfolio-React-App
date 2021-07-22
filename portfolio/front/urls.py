from django.urls import path , include
from .views import Main_page

urlpatterns = [
    path('' , Main_page.as_view() , name = 'home' ),
    path( 'projects' , Main_page.as_view() , name = 'projects' )
]
