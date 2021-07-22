from rest_framework import serializers
from front.models import Info


class Info_serializer(serializers.ModelSerializer) : 
	class Meta : 
		model = Info
		fields = (
			'first_name' , 'last_name' , 'desc' , 'about'  , 'show' , 'phone'  ,'email',
			'youtube' , 'linkdin' , 'github' , 'facebook',

			)

