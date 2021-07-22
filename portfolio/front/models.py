from django.db import models

# Create your models here.

class Info(models.Model) : 
	first_name = models.CharField(max_length=20 , default='')
	last_name = models.CharField(max_length=20 , default='')
	desc = models.CharField(max_length=150 ,default='')
	about = models.TextField(default='')
	prof_img = models.ImageField(upload_to = 'portfolio/images' ,default="")
	show = models.BooleanField(default=False)
	email = models.EmailField(blank=True)
	phone = models.CharField(max_length=20 , default='' , blank=True)
	youtube = models.URLField(max_length=200 , blank=True , default='')
	linkdin = models.URLField(max_length=200 , blank=True , default='')
	github = models.URLField(max_length=200 , blank=True , default='')
	facebook = models.URLField(max_length=200  , blank=True, default='')



	def save(self) : 
		if self.show == True : 
			for each in Info.objects.all() : 
				each.show = False
				each.save()

		super().save()

	def __str__(self) : 
		return f'{self.first_name} {self.last_name}'

class Skill(models.Model) : 
	person = models.ForeignKey(Info , default='',  on_delete = models.CASCADE )
	skill = models.CharField(max_length=20 , default="" )
	lis = [ (i , i) for i in range(101)]
	level = models.IntegerField( choices= lis , default=0 )

	def __str__(self) : 
		return f"Name : {self.person.first_name} || Skill : {self.skill}"

class Project(models.Model) : 
	person = models.ForeignKey(Info , default='',  on_delete = models.CASCADE )
	name = models.CharField(max_length=20 , default='')
	desc = models.CharField(max_length=100,  default='')
	link_youtube = models.URLField(max_length=200 , blank=True , default='')
	link_github = models.URLField(max_length=200 , blank=True , default='')
	link_facebook = models.URLField(max_length=200  , blank=True, default='')

	def __str__(self) : 
		return f'Admin : {self.person.first_name} Project : {self.name}'
