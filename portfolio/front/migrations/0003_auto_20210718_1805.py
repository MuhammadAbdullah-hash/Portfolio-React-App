# Generated by Django 3.0.7 on 2021-07-18 13:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('front', '0002_auto_20210718_1702'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='info',
            name='about',
        ),
        migrations.AddField(
            model_name='info',
            name='prof_img',
            field=models.ImageField(default='', upload_to='portfolio/images'),
        ),
    ]
