from django.shortcuts import render
from django.views import View
from .models import Info

# Create your views here.

class Main_page(View) : 
	def get(self, request) : 
		return render(request, 'front/index.html')

