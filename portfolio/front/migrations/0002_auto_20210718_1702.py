# Generated by Django 3.0.7 on 2021-07-18 12:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('front', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='info',
            name='name',
        ),
        migrations.AddField(
            model_name='info',
            name='first_name',
            field=models.CharField(default='', max_length=20),
        ),
        migrations.AddField(
            model_name='info',
            name='last_name',
            field=models.CharField(default='', max_length=20),
        ),
    ]
