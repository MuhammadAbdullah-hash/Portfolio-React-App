# Generated by Django 3.0.7 on 2021-07-17 10:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Info',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=40)),
                ('desc', models.CharField(default='', max_length=150)),
                ('about', models.TextField()),
            ],
        ),
    ]
