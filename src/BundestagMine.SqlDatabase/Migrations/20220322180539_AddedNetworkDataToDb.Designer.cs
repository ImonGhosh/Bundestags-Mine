﻿// <auto-generated />
using System;
using BundestagMine.SqlDatabase;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BundestagMine.SqlDatabase.Migrations
{
    [DbContext(typeof(BundestagMineDbContext))]
    [Migration("20220322180539_AddedNetworkDataToDb")]
    partial class AddedNetworkDataToDb
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.10")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("BundestagMine.Models.Database.MongoDB.CommentNetworkLink", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid?>("NetworkDataId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<double>("Sentiment")
                        .HasColumnType("float");

                    b.Property<string>("Source")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Target")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Value")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("NetworkDataId");

                    b.ToTable("CommentNetworkLink");
                });

            modelBuilder.Entity("BundestagMine.Models.Database.MongoDB.CommentNetworkNode", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid?>("NetworkDataId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Party")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("NetworkDataId");

                    b.ToTable("CommentNetworkNode");
                });

            modelBuilder.Entity("BundestagMine.Models.Database.MongoDB.Deputy", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("AcademicTitle")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("BirthDate")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DeathDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("FirstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Fraction")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gender")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("HistorySince")
                        .HasColumnType("datetime2");

                    b.Property<string>("LastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MaritalStatus")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MongoId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Party")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Profession")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Religion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SpeakerId")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Deputies");
                });

            modelBuilder.Entity("BundestagMine.Models.Database.MongoDB.NetworkData", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("MongoId")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("NetworkDatas");
                });

            modelBuilder.Entity("BundestagMine.Models.Database.MongoDB.Protocol", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("AgendaItemsCount")
                        .HasColumnType("int");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<int>("LegislaturePeriod")
                        .HasColumnType("int");

                    b.Property<string>("MongoId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Number")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Protocols");
                });

            modelBuilder.Entity("BundestagMine.Models.Database.MongoDB.CommentNetworkLink", b =>
                {
                    b.HasOne("BundestagMine.Models.Database.MongoDB.NetworkData", null)
                        .WithMany("Links")
                        .HasForeignKey("NetworkDataId");
                });

            modelBuilder.Entity("BundestagMine.Models.Database.MongoDB.CommentNetworkNode", b =>
                {
                    b.HasOne("BundestagMine.Models.Database.MongoDB.NetworkData", null)
                        .WithMany("Nodes")
                        .HasForeignKey("NetworkDataId");
                });

            modelBuilder.Entity("BundestagMine.Models.Database.MongoDB.NetworkData", b =>
                {
                    b.Navigation("Links");

                    b.Navigation("Nodes");
                });
#pragma warning restore 612, 618
        }
    }
}
