from django.http import HttpResponse , JsonResponse , QueryDict
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from front.models import Info , Skill , Project
from .serializers import Info_serializer

# Create your views here.


class Get_info(APIView) : 
	def get(self , request) : 
		objs = Info.objects.all()
		len_lis = len(list(objs))
		if len_lis > 0 : 
			for each in objs : 
				if each.show == True : 
					obj = each
					query_skill = Skill.objects.filter( person = obj )
					query_project = Project.objects.filter( person = obj )
					skill_lis = [ (every.skill , every.level) for every in query_skill ]
					project_lis=[ 
					{ 'title' :  every.name , 'desc' : every.desc , 
					'youtube' : every.link_youtube , 
					'github' : every.link_github , 
					'facebook' : every.link_facebook}  
					for every in query_project 
					]

					params = {
					'first_name' : obj.first_name , 'last_name' : obj.last_name ,
					'desc'  : obj.desc , 'about' : obj.about , 
					'img' : f'media/{obj.prof_img}',
					'email' : obj.email, 'phone' : obj.phone,
					'you_link' : obj.youtube, 'git_link' : obj.github,
					'fab_link' : obj.facebook , 'linkd_link' : obj.linkdin,
					'skills' : skill_lis ,
					'projects' : project_lis
					}
					return Response( params , status = status.HTTP_200_OK )
			params = {'Responce' : 'No Content'}
			return Response( params , status=status.HTTP_204_NO_CONTENT )
		elif len_lis == 0 : 
			params = {'Responce' : 'Not found'}
			return Response(params , status = status.HTTP_204_NO_CONTENT )


class Add_details( APIView ) :
	serializer_class = Info_serializer	
	def post(self,request) : 
		serializer = self.serializer_class(data = request.data)
		if serializer.is_valid() : 
			f_name = serializer.data.get('first_name')
			l_name = serializer.data.get('last_name')
			desc = serializer.data.get('desc')
			about = serializer.data.get('about')
			show = serializer.data.get('show')
			phone = serializer.data.get('phone')
			email = serializer.data.get('email')
			you_link = serializer.data.get('youtube')
			fab_link = serializer.data.get('facebook')
			git_link = serializer.data.get('github')
			linkd_link = serializer.data.get('linkdin')

			for each in Info.objects.all() : 
				if f'{each.first_name}{each.last_name}' == f'{f_name}{l_name}' : 
					each.desc = desc
					each.about = about
					each.show = show
					each.phone = phone
					each.email = email
					each.youtube = you_link
					each.github = git_link
					each.facebook = fab_link
					each.linkdin = linkd_link
					each.save()
					break
			else : 
				new_obj = Info(
					first_name = f_name , last_name = l_name  , desc = desc , 
					about = about , prof_img = prof_img ,show=show , phone = phone,
					email=email , youtube = you_link , github=git_link, 
					facebook = fab_link , linkdin = linkd_link
					)
				new_obj.save()

			return Response(serializer.data , status = status.HTTP_201_CREATED)
		return Response({"Response"  : 'Not valid'} , status = status.HTTP_406_NOT_ACCEPTABLE )










	



