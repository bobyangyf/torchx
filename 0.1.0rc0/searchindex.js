Search.setIndex({docnames:["app_best_practices","basics","beta","cli","component_best_practices","components","components/base","components/distributed","components/hpo","components/interpret","components/metrics","components/serve","components/train","components/utils","configure","examples_apps/datapreproc/component","examples_apps/datapreproc/datapreproc","examples_apps/index","examples_apps/lightning_classy_vision/component","examples_apps/lightning_classy_vision/data","examples_apps/lightning_classy_vision/interpret","examples_apps/lightning_classy_vision/model","examples_apps/lightning_classy_vision/train","examples_pipelines/index","examples_pipelines/kfp/advanced_pipeline","examples_pipelines/kfp/dist_pipeline","examples_pipelines/kfp/intro_pipeline","index","pipelines","pipelines/kfp","quickstart","runner","schedulers","schedulers/kubernetes","schedulers/local","schedulers/slurm","specs"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["app_best_practices.rst","basics.rst","beta.rst","cli.rst","component_best_practices.rst","components.rst","components/base.rst","components/distributed.rst","components/hpo.rst","components/interpret.rst","components/metrics.rst","components/serve.rst","components/train.rst","components/utils.rst","configure.rst","examples_apps/datapreproc/component.rst","examples_apps/datapreproc/datapreproc.rst","examples_apps/index.rst","examples_apps/lightning_classy_vision/component.rst","examples_apps/lightning_classy_vision/data.rst","examples_apps/lightning_classy_vision/interpret.rst","examples_apps/lightning_classy_vision/model.rst","examples_apps/lightning_classy_vision/train.rst","examples_pipelines/index.rst","examples_pipelines/kfp/advanced_pipeline.rst","examples_pipelines/kfp/dist_pipeline.rst","examples_pipelines/kfp/intro_pipeline.rst","index.rst","pipelines.rst","pipelines/kfp.rst","quickstart.rst","runner.rst","schedulers.rst","schedulers/kubernetes.rst","schedulers/local.rst","schedulers/slurm.rst","specs.rst"],objects:{"torchx.components":{base:[6,0,0,"-"],dist:[7,0,0,"-"],hpo:[8,0,0,"-"],interpret:[9,0,0,"-"],metrics:[10,0,0,"-"],serve:[11,0,0,"-"],train:[12,0,0,"-"],utils:[13,0,0,"-"]},"torchx.components.base":{binary_component:[6,0,0,"-"],roles:[6,0,0,"-"]},"torchx.components.base.binary_component":{binary_component:[6,1,1,""]},"torchx.components.base.roles":{create_torch_dist_role:[6,1,1,""]},"torchx.components.dist":{ddp:[7,1,1,""]},"torchx.components.serve":{torchserve:[11,1,1,""]},"torchx.components.test":{component_test_base:[4,0,0,"-"]},"torchx.components.test.component_test_base":{ComponentTestCase:[4,2,1,""]},"torchx.components.test.component_test_base.ComponentTestCase":{_validate:[4,3,1,""]},"torchx.components.utils":{copy:[13,1,1,""],echo:[13,1,1,""],sh:[13,1,1,""],touch:[13,1,1,""]},"torchx.pipelines":{kfp:[28,0,0,"-"]},"torchx.pipelines.kfp.adapter":{ContainerFactory:[28,2,1,""],component_from_app:[28,1,1,""],component_spec_from_app:[28,1,1,""],container_from_app:[28,1,1,""],resource_from_app:[28,1,1,""]},"torchx.runner":{Runner:[31,2,1,""],get_runner:[31,1,1,""]},"torchx.runner.Runner":{close:[31,3,1,""],describe:[31,3,1,""],dryrun:[31,3,1,""],list:[31,3,1,""],log_lines:[31,3,1,""],run:[31,3,1,""],run_component:[31,3,1,""],run_opts:[31,3,1,""],schedule:[31,3,1,""],scheduler_backends:[31,3,1,""],status:[31,3,1,""],stop:[31,3,1,""],wait:[31,3,1,""]},"torchx.schedulers":{Scheduler:[32,2,1,""],get_schedulers:[32,1,1,""],kubernetes_scheduler:[33,0,0,"-"],local_scheduler:[34,0,0,"-"],slurm_scheduler:[35,0,0,"-"]},"torchx.schedulers.Scheduler":{cancel:[32,3,1,""],close:[32,3,1,""],describe:[32,3,1,""],exists:[32,3,1,""],log_iter:[32,3,1,""],run_opts:[32,3,1,""],schedule:[32,3,1,""],submit:[32,3,1,""],submit_dryrun:[32,3,1,""]},"torchx.schedulers.kubernetes_scheduler":{KubernetesScheduler:[33,2,1,""]},"torchx.schedulers.kubernetes_scheduler.KubernetesScheduler":{describe:[33,3,1,""],log_iter:[33,3,1,""],run_opts:[33,3,1,""],schedule:[33,3,1,""]},"torchx.schedulers.local_scheduler":{ImageProvider:[34,2,1,""],LocalDirectoryImageProvider:[34,2,1,""],LocalScheduler:[34,2,1,""]},"torchx.schedulers.local_scheduler.ImageProvider":{fetch:[34,3,1,""],get_command:[34,3,1,""],get_cwd:[34,3,1,""],get_entrypoint:[34,3,1,""]},"torchx.schedulers.local_scheduler.LocalDirectoryImageProvider":{fetch:[34,3,1,""],get_command:[34,3,1,""],get_cwd:[34,3,1,""],get_entrypoint:[34,3,1,""]},"torchx.schedulers.local_scheduler.LocalScheduler":{close:[34,3,1,""],describe:[34,3,1,""],log_iter:[34,3,1,""],run_opts:[34,3,1,""],schedule:[34,3,1,""]},"torchx.schedulers.slurm_scheduler":{SlurmScheduler:[35,2,1,""]},"torchx.schedulers.slurm_scheduler.SlurmScheduler":{describe:[35,3,1,""],schedule:[35,3,1,""]},"torchx.specs":{AppDef:[36,2,1,""],AppState:[36,2,1,""],AppStatus:[36,2,1,""],ReplicaState:[36,4,1,""],Resource:[36,2,1,""],RetryPolicy:[36,2,1,""],Role:[36,2,1,""],RunConfig:[36,2,1,""],get_named_resources:[36,1,1,""],macros:[36,2,1,""],runopts:[36,2,1,""]},"torchx.specs.Resource":{copy:[36,3,1,""]},"torchx.specs.Role":{pre_proc:[36,3,1,""]},"torchx.specs.macros":{Values:[36,2,1,""]},"torchx.specs.macros.Values":{apply:[36,3,1,""],substitute:[36,3,1,""]},"torchx.specs.runopts":{add:[36,3,1,""],is_type:[36,3,1,""],resolve:[36,3,1,""]},torchx:{cli:[3,0,0,"-"],components:[5,0,0,"-"],pipelines:[28,0,0,"-"],runner:[31,0,0,"-"],schedulers:[32,0,0,"-"],specs:[36,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"0":[0,1,3,4,6,11,13,15,16,18,19,20,21,22,24,25,26,28,30,31,32,33,34,36],"000":[15,16,18,19,20,21,22,24,25,26],"02":21,"0rc0":[11,13],"1":[0,1,3,4,6,7,11,13,14,15,16,18,19,20,21,22,24,28,30,31,32,33,34,36],"10":[4,31,36],"100":[3,31,34],"1000":[19,22],"1024":[1,15,18,36],"120":33,"122":14,"1234":[33,35],"128":10,"13":19,"14":21,"16":[14,19],"16xlarg":14,"18":33,"2":[1,3,6,14,20,28,30,36],"200":[15,16,24],"2000":[16,19],"21":33,"22":33,"24":20,"244":14,"255":19,"3":[3,6,19,20,21,22,25,28,30,32,33,34,36],"32":[14,22],"4":[1,6,14,30,36],"4096":21,"488":14,"488gb":14,"5":[6,16,19,20,22,36],"50":[32,33,34],"500":36,"50th":[32,33,34],"6":19,"61":14,"64":[14,19,20,21,36],"64x64":19,"71":8,"8":[6,14],"8080":36,"8081":[11,24,36],"9":[0,31],"90528d7ca1a48142e341f4ef8d21d0d":15,"9090":36,"abstract":[1,24,32,34],"break":31,"case":[0,1,3,7,24],"class":[0,4,6,14,19,21,28,31,32,33,34,35,36],"default":[3,6,16,22,24,30,31,33,35,36],"do":[0,1,3,4,12,14,21,31,34,36],"export":[0,18,21,22,24],"final":[31,32,33,34,36],"float":[5,31,36],"function":[1,3,4,5,14,21,25,26,28,31,32,36],"import":[0,1,3,4,5,6,11,14,15,16,18,19,20,21,22,24,25,26,28,30,33,36],"int":[1,3,4,5,6,7,13,16,18,19,21,22,30,31,32,33,34,36],"long":[3,31],"new":[0,1,5,32,33,34,36],"return":[1,4,5,6,7,11,14,15,16,18,19,20,21,22,28,30,31,32,33,34,35,36],"short":31,"static":[4,24,36],"super":[19,21],"transient":0,"true":[6,16,20,21,22,24,31,32,33,34,36],"try":[1,19,30,31],"while":[0,1,31,32,33,34,36],A:[1,6,10,14,31,36],And:[1,14],As:[1,10,12,26],BE:6,But:[1,30],By:3,For:[0,1,4,6,8,10,14,19,22,24,26,30,31,32,33,34,35,36],If:[0,1,3,4,14,22,24,30,31,32,33,34,36],In:[1,3,4,7,24,30],Is:[32,33,34],It:[0,3,4,6,14,19,20,21,27,30,31,32,33,34],NOT:[1,3,19,31,36],Not:[5,27,32,33,34,36],One:[1,30],THE:30,TO:30,That:[3,6,30],The:[0,1,3,4,5,6,7,11,14,20,24,27,28,30,31,32,33,34,36],Then:14,There:[0,1,3],These:[0,4,6,11,12,13,24,28,30,36],To:[0,1,3,19,24,25,26,30,32],With:[1,30],_:[16,19,21],__file__:24,__getitem__:[32,33,34],__init__:[19,21],__main__:[16,20,22],__name__:[16,20,22],_acc:21,_container_op:28,_field_typ:6,_loss:21,_missing_typ:6,_resource_op:28,_step:21,_valid:4,abc:32,about:[0,1,6,31],abov:[1,3,5,14],absolut:[30,31,34],abstractmethod:32,abus:31,acc_metr:21,accept:[5,36],access:[0,1,3,24,32,33,34,35],accessor:36,accordingli:5,account:35,accur:1,accuraci:[21,31],achiev:1,across:[0,1,19],act:31,action:[22,31],actual:[1,7,24,31,32,34,36],ad:[0,1,35],adam:21,adapt:[24,25,26,28,29],add:[16,22,26,30,36],add_argu:[16,20,22,24],addit:[5,30,36],adjust:0,admitt:36,adopt:0,advanc:[1,23,25,26],advanced_pipelin:24,advantag:1,after:[14,20,24],against:36,agent:6,agnost:[1,22],ahead:24,ai:20,aim:11,aivan:21,aka:3,alia:36,alias:14,all:[0,3,5,14,17,20,23,24,25,26,30,31,32,33,34,35,36],alloc:[4,24,31,32,34,35,36],allow:[0,1,3,4,6,7,19,24,26,28,32,34,36],along:[3,10],alpin:[25,26,33],alreadi:[1,3,27,30,31],also:[0,1,3,21,30,36],altern:31,alwai:[3,31,32,33,34],an:[0,1,3,4,6,9,10,12,20,21,22,24,25,26,27,29,30,31,32,33,34,35,36],analys:0,analysi:20,analyz:[9,20],ani:[0,6,13,14,28,31,32,33,34,35,36],annot:[5,32],anoth:[5,24],another_arg:6,anti:31,anymor:31,anyth:34,anywher:1,api:[0,1,3,4,6,7,11,13,18,24,28,29,31,32,33,34,35,36],apicli:33,app:[1,3,4,5,9,10,12,13,14,15,17,18,21,24,25,26,27,28,30,31,32,33,34,35,36],app_arg:[5,30,31],app_def:28,app_handl:[3,31,36],app_id:[3,32,33,34,35,36],app_spec:1,app_statu:31,appdef:[0,3,4,5,6,7,11,13,14,15,18,24,25,26,28,30,31,32,33,34,35],appdryruninfo:[31,32,33,34,35,36],append:[16,18,19,20,22,24],appli:[3,6,28,36],applic:[0,1,3,6,7,9,11,27,30,31,32,33,34,35,36],appspec:[1,33,35],appstat:36,appstatu:[31,36],ar:[0,1,3,4,5,6,7,12,13,14,20,22,24,27,28,30,31,32,33,34,35,36],arbitrari:[5,32,33,34,36],architectur:0,archiv:[3,11,21],arcnam:16,arg:[1,3,4,6,13,15,16,18,20,22,24,25,26,28,30,31,34,35,36],argpars:[16,20,22,24,30],argument:[0,1,3,5,6,7,13,28,30,31,35,36],argumentpars:[16,20,22,24],argv:[16,20,22,24],around:[3,4,24,36],arr:20,arrai:20,artifact:36,assembl:28,assert:[16,19,21],asserttru:0,assign:36,associ:[14,30,31],assum:[24,30],assumpt:[1,32,33,34],astyp:19,attempt:3,attr:20,attr_ig:20,attribut:[19,20],author:[1,3,14,30],autom:24,automat:[0,6],avail:[5,8,31,32,33,34,36],avoid:4,aw:[1,14],awai:24,axi:20,back:34,backend:[0,1,3,7,31,32],bad_typ:36,ball:36,bar:[1,3,6,14,18,30,31],base:[1,3,4,7,12,14,15,18,24,26,27,31,32,33,34,36],base_imag:[3,6,7,36],base_img_root:36,baselin:20,basenam:16,baseop:25,bash:[4,13],basic:[27,30,32,33,34],batch:[21,22],batch_idx:21,batch_siz:[19,20,22],batchsize_per_replica:19,baz:14,becaus:[1,3,36],been:[31,32,33,34,36],befor:[1,3,24,30,31,36],begin:31,behalf:[3,34],behav:[32,33,34],behavior:[4,6,28,31,32,33,34,36],being:10,belong:5,below:[1,3,14,30],best:[1,3,14,27,31],better:[0,4],between:[1,6,13,19,27],bin:[1,3,13,25,26,30],binari:[1,6,7,13,30,34],binary_compon:[6,12,15,18,24,26],bind:36,blended_heat_map:20,blob:[7,24],block:[3,31,32,33,34],bool:[18,31,32,33,34,36],both:[0,3,4,30,31],boto3:1,box:[0,4,5,9,12,13],breviti:[1,3,30],brows:[1,3,5,30],bucket:[1,11],build:[0,1,6,36],built:[0,3,9,24,26,30,36],builtin:[0,1,4,5,10,14,24,25,26,27,31],bundl:36,byo:30,c10d:7,cach:31,cache_s:34,call:[1,4,13,14,24,25,26,27,28,30,31,32,33,34],callabl:19,callback:22,caller:[32,33,34],can:[0,1,3,4,5,7,10,12,13,14,19,21,24,25,26,27,28,30,31,32,33,34,35,36],cancel:[31,32,33,34,35,36],cannot:[6,21,34],canon:1,capabl:[3,6,36],captum:[0,9,20],cat:3,categori:5,caus:20,caveat:36,certain:[31,34],cfg:[31,32,33,34,35,36],cfg_kei:36,chain:[25,26],chanc:27,chang:[0,3,36],cheap:1,check:[3,21,32,33,34,36],checkout:30,checkpoint:[18,20,22,24],checkpoint_callback:22,checkpoint_path:[20,22],child:34,childprocess:34,choic:0,chose:3,cifar_torchvision_interpret:20,ckpt:[0,24],class1:19,class1_test_path:19,class1_train_path:19,class1_val_path:19,class2:19,class2_test_path:19,class2_train_path:19,class2_val_path:19,classi:[19,22],classy_dataset:19,classy_vis:19,classydataset:19,classyvis:22,clean:31,cleanup:34,cli:[1,4,5,14,24,27,30,35],click:[15,16,18,19,20,21,22,24,25,26],client:[1,3,24,25,26,32,33,34],close:[31,32,34],cloud:[10,19,24],cluster:[1,14,24,25,26,27,33,34,36],cluster_id:36,cmd:36,code:[0,1,4,12,15,16,17,18,19,20,21,22,23,24,25,26,36],cognit:3,collect:[5,30],com:[7,8,10,24,30,33,35],come:[8,27],comma:[3,36],command:[0,3,13,34,36],commandlin:[3,36],common:[0,1,4,12,27,36],commun:0,compar:6,comparison:36,compat:1,compil:[24,25,26,28],complet:[0,1,31,33,35,36],complex:[0,4,26,28,30],complianc:31,compon:[0,6,7,9,10,11,13,17,19,25,26,28,29,31],component_from_app:[26,28],component_nam:31,component_path:31,component_spec_from_app:28,component_test_bas:4,componentnotfoundexcept:31,componenttestcas:4,componentvalidationexcept:31,compos:[16,19],composit:1,compress:15,compris:14,comput:[4,21],concaten:4,concept:[27,30,36],config:[3,30,31],configur:[4,6,27,31,32,33,34,36],configure_optim:21,configvalu:36,confirm:33,confus:30,conjunct:34,consid:[3,32,33,34],consist:[0,5,36],constitut:[32,33,34],construct:[6,12,31,36],constructor:31,consum:[0,4,20,24,31],contain:[1,3,5,6,7,11,13,14,24,25,26,28,30,31,34,36],container_from_app:[24,26,28],containerfactori:28,containerop:[1,26,28],context:[1,30],continu:[0,16,19,20,28],control:[1,6,7,32,33,34],conveni:[1,3,6,31],convers:26,convert:[0,1,19,20,25,26,28],convert_to_rgb:20,coordin:[1,36],copi:[4,6,13,24,30,36],copy_app:24,core:[4,26,36],correspond:[9,28],cost:36,could:[4,36],count:34,count_nonzero:20,coupl:0,cp:13,cpu:[1,3,4,6,14,15,18,36],crash:[20,36],creat:[0,1,3,4,5,6,9,13,21,27,30,36],create_random_data:[19,22],create_schedul:14,create_torch_dist_rol:6,cross:26,cross_entropi:21,cs231n:[15,16,24],current:[5,13,24,28,33],cursor:[31,32,33,34],custom:[0,3,4,9,12,24,27,30,32,33,34],customapptest:0,data:[1,7,12,15,18,19,20,22,24,36],data_dir:[19,20,22],data_path:[18,19,20,22,24],data_preproc:15,dataclass:[1,6],dataload:[19,20],datapreproc:[6,16,17,20,24],datapreproc_app:24,datapreproc_rol:15,dataset:[15,16,17,21],datetim:[31,32,33,34],ddp:[1,4,5,7,12,31],deal:[3,24,36],debug:3,deem:[31,32,34],deep:14,def:[0,1,3,4,14,15,16,18,19,20,21,22,24,25,26,28,30,35,36],default_factori:6,defin:[1,3,5,7,14,19,24,25,26,27,36],definit:[0,1,4,5,9,11,14,15,18,25,26,27,30,32,33,34,36],delimit:[3,30,36],delta:20,demand:36,departur:36,depend:[0,1,3,22,24,31,32,36],deploi:[0,11],deploy:[28,34],describ:[0,14,26,31,32,33,34,35],describe_job:3,describeapprespons:[32,33,34,35],descript:[3,5,16,20,22,24,28,32,33,34,35],design:[4,28],destin:13,detail:3,determin:5,dev:36,develop:5,deviat:4,diagram:[1,5],dict:[0,5,6,7,11,15,18,24,31,32,34,36],dictat:36,dictionari:4,did:30,differ:[0,1,3,4,5,14,19,34],dim:[20,21],dir:[3,10,14,30,34],direct:31,directli:[3,10,24,31,32,33,34,35,36],directori:[5,13,14,30,34,36],dirnam:24,dirpath:22,disabl:18,disambigu:1,discourag:31,displai:14,dist:[4,7,12,25],dist_pipelin:25,distribut:[0,1,5,6,12,14,23,26,27,28,31,33,34,35,36],distributed_test:5,doc:[1,4,5,6,25,28,30],docker:[24,30,36],dockerfil:36,document:[0,30,31,32,33,34,36],doe:[1,3,4,13,19,30,31,32,33,34,35,36],doesn:[0,24,28],don:[0,1,12],done:[14,30],doubt:3,down:3,download:[15,16,17,18,19,20,21,22,23,24,25,26,34],download_and_extract_zip_arch:16,download_data:[19,20,22],download_fil:1,downstream:31,driver:36,dry:[31,32],dryrun:31,dryrun_info:[31,32,33,34,35,36],dsl:[1,25,26,28],dst:[0,13],due:20,dure:[21,36],duti:36,dynam:1,e:[1,5,13,14,18,30,31,32,33,34,36],each:[3,5,6,7,24,35,36],easi:[1,19,24],easier:[0,4,11],easiest:30,echo:[1,3,13,25,26,30,33,35],echo_app:[25,26],echo_c944ffb2:3,echo_contain:[25,26],echo_ecd30f74:3,echo_torchx:1,edu:[15,16,24],effect:[6,31],effort:1,either:[3,4,5,32,33,34],elast:[0,4,6,7],elastic_train:6,elif:4,els:[15,18,22,24],elsewher:0,empti:[31,32,33,34],en:[5,10,25,28],enabl:35,encod:[1,36],encount:36,encourag:[32,33,34,35],end:[31,32,33,34],endpoint:[7,11,24],enforc:34,ensur:[4,6,20,22,32],entir:[1,36],entri:[14,31],entry_point:14,entrypoint:[1,3,6,7,14,15,18,24,25,26,30,31,34,36],enumer:[14,20],env:[3,6,7,15,18,36],env_var:[34,36],environ:[0,4,13,22,36],ep_group_nam:14,ep_nam:14,epoch:[18,22,24],equival:[28,32,33,34],error:[0,3,4,36],especi:1,essenti:[1,3],etcd:7,even:[1,3,4],eventu:[32,33,34],everyth:[1,3],evict:36,exact:[1,3,32,33,34],exactli:1,exampl:[1,3,4,6,9,10,21,29,30,34,36],example_googl:5,examples_apps_jupyt:17,examples_apps_python:17,examples_imag:24,examples_pipelines_jupyt:23,examples_pipelines_python:23,except:[3,19,32,33,34,35,36],execut:[0,6,13,31,33,34],exhaust:[32,33,34],exist:[1,4,16,26,31,32,33,34,35],exit:[3,30,36],expect:[1,32,33,34,35],experi:31,experiment_nam:31,explanatori:3,export_inference_model:[21,22],expos:31,extend:4,extens:[4,6,10],extent:[3,31],extra:31,extract:19,extractal:[16,19],f:[1,4,16,19,20,21,22,24,25,26,30,32,33,34],factor:3,factori:[1,5,6,28,36],fail:[6,31,36],failur:[0,4,36],fals:[18,19,31,32,33,34,36],familiar:[27,30],far:30,fashion:[1,24],fast:24,faux:3,fb:21,featur:[1,30,31,33,34,35],fetch:[15,31,32,33,34,35],fetcher:3,few:[1,3],field:[1,3,6,32,33,34,36],fig:20,figur:[4,21,30],file:[0,1,3,5,11,13,14,15,18,19,21,24,25,26,30,31,32,33,34,35],file_lint:5,file_path:31,fileexistserror:19,filesystem:[0,1,24],fill:19,filter:[3,31],find:[1,3,14,27,30],finish:3,first:[20,24,25,26,27,30,31],fit:[1,3,22,27],fix:[1,14],fixm:[19,20,21],flag:22,flexibl:[0,1,4],flow:1,fname:[16,19],folder:[16,19,21],follow:[1,5,6,14,30,31,32,33,34,36],foo:[1,3,6,14,18,28,30,31,36],foobar:[14,18,30,34,36],form:3,format:[0,4,5,28,31],forward:21,found:[3,7,30],framework:1,free:[31,32,34],from:[0,1,3,4,5,6,11,13,14,15,16,18,19,20,21,22,24,25,26,28,30,31,32,33,34,36],fromarrai:19,fs:[1,16,19,21],fsspec:[0,1,11,13,16,19,20,21,22,24],full:[0,3,4,15,16,18,19,20,21,22,24,25,26,28],fulli:[24,32,33,34],function_nam:[4,31],g:[1,5,13,14,18,30,31,32,33,34,36],galleri:[15,16,17,18,19,20,21,22,23,24,25,26],gang:33,gb:14,gc:0,gener:[0,1,4,12,15,16,17,18,19,20,21,22,23,24,25,26,28,31,35],get:[3,7,19,24,27,30,31,32,33,34,36],get_command:34,get_cwd:34,get_entrypoint:34,get_filesystem:1,get_fs_token_path:[16,19,21],get_log:3,get_named_resourc:[4,36],get_runn:[1,5,31],get_schedul:32,ghcr:[11,13],gil:0,github:[7,8,10,24,33],give:36,given:[1,3,11,14,19,31,34,36],global:[16,20,22,24],glue:13,go:31,good:[1,30],gpu:[1,3,6,14,15,18,36],gpu_x_1:[14,36],gpu_x_2:14,gpu_x_4:14,gpu_x_8:14,gradient:[20,24],granular:1,grayscal:19,group:[7,14,31],guarante:[31,32,33,34,36],gz:[16,19,36],h:[3,30],ha:[1,4,6,14,20,22,24,25,26,30,31,32,33,34,35,36],had:[14,30],handl:[0,3,21,31],handler:21,happen:1,hard:4,hardcod:1,harder:0,hardwar:36,hash:[6,15],hasn:0,have:[0,1,3,4,5,12,14,16,19,21,24,25,26,28,30,31,32,33,34,36],haven:30,heatmap:20,hello:[1,3,13,25,26,30,33,35],hello_world:[3,36],help:[3,16,20,22,24,30,32,33,34,36],helper:[4,26],henc:36,here:[0,3,15,16,18,19,20,21,22,24,25,26],heterogen:35,heterogeneous_job:35,high:31,highli:31,hold:36,home:[1,31],homogen:1,honor:[31,32,33,34],hood:1,hook:[0,6],host:[3,7,31,34,36],how:[0,1,3,4,9,10,12,24,25,26,28,30,31,36],howev:[0,1,4,12,32,36],hpo:1,html:[5,10,11,35],http:[5,7,8,10,11,14,15,16,20,24,25,28,30,31,33,35],human:31,hyperparamet:[0,27],i:[19,20,30],id:[3,30,31,32,36],ideal:1,idempot:32,identifi:[3,7,21,30,32,36],ig:20,ig_:20,ignit:0,ignor:[3,7,20,32,33,34],illeg:36,illustr:5,im:19,imag:[1,3,4,6,7,11,13,15,16,18,19,20,21,22,24,25,26,28,33,36],image_fetch:3,image_fil:[16,19],image_typ:[30,34],imagefold:19,imagenet:[15,16,17,19,24],imageprovid:34,img:[20,34],img_nam:4,img_root:[16,19,34,36],img_transform:19,img_vers:4,implement:[14,30,31,32,33,34,35,36],implementor:[32,33,34,35],implicit:1,imposs:4,includ:[0,1,3,6,31,36],inclus:6,incur:[3,36],indefinit:31,independ:4,indic:30,individu:31,infer:[11,21,22,24],info:[4,8,20,24,25,26,28,31,35],inform:[0,1,4,6,31,36],infra:1,infrastructur:[0,1,14],init:[6,20,22],initi:[19,22,36],initial_work:24,inlin:[1,26],input:[0,1,15,20],input_md5:15,input_path:[1,15,16,24],input_url:1,insight:3,instal:[25,28,30,33,35,36],instanc:[1,4,10,14,24,28,30,32,33,34,36],instanti:[25,26,34],instead:[3,4,22,31,36],instruct:[30,33],integ:6,integr:[0,20,24],integratedgradi:20,intend:[1,26,31,36],interact:[0,11],interest:30,interfac:[1,14,32,33,35],intermedi:10,interpret:[17,18,21,24,27,34,36],interpret_app:24,interpret_path:24,interrupt:31,interv:31,intro:23,intro_pipelin:26,introduc:1,introductori:26,invalid:[6,31,36],invers:3,invok:[6,30,36],io:[1,5,10,11,13],ipynb:[15,16,18,19,20,21,22,24,25,26],is_image_fil:[16,19],is_termin:31,is_typ:36,isinst:36,islic:20,issu:[8,10,33],iter:[3,24,31,32,33,34],itertool:20,its:[1,30,31],itself:[30,36],j:30,jit:21,jit_path:21,jite:21,job:[0,1,4,5,7,14,25,27,28,30,31,32,33,34,35,36],job_id:3,jobdefinit:1,jobnam:1,join:[1,16,19,20,21,22,24],jpeg:19,json:[3,36],judgment:3,jupyt:[0,15,16,17,18,19,20,21,22,23,24,25,26],just:[0,4,21,24,26,27,30],k1:30,k2:30,k:[3,31,32,33,34],keep:[3,4],kei:[1,36],kfp:[1,24,25,26,29],kill:[32,33,34],know:[24,36],known:[3,13],kubeflow:[1,27,28],kubernet:[1,14,24,25,27,28,31],kubernetes_schedul:33,kubernetesjob:33,kubernetesschedul:33,kwarg:[6,14,28],l1:21,l:36,label:20,lambda:19,languag:[0,27],larg:3,last:24,later:[0,19],latest:[5,6,18,28,30,33,36],launch:[1,3,6,10,15,18,24,25,26,28,30,31,35,36],launch_kwarg:6,layer:1,layout:7,lead:31,learn:[0,1,3,12,14,27,30],least:36,left:31,len:[16,19,21],less:[0,35],let:[3,24,30],level:[1,14,31],leverag:[24,26],librari:[0,1,5,6,19,22],light:0,lightn:[0,1,10,19,22],lightning_classy_vis:[18,20,21,22,24],lightning_log:[22,24],lightningdatamodul:19,lightningmodul:21,like:[0,1,15,24,26,32,33,34],limit:34,line:[0,3,14,31,32,33,34],linear:21,lingo:1,list:[1,4,5,6,16,20,22,30,31,34,36],live:[32,33,34],ll:[0,1,3,24,30],load:[0,1,18,19,20,22,24],load_component_from_:28,load_from_checkpoint:[20,22],load_path:[18,20,22,24],loader:19,local:[3,5,7,10,19,24,30,31,32,34,35,36],local_runopt:31,local_schedul:[32,34],localdirectoryimageprovid:34,localhost:27,localhostschedul:34,localschedul:34,locat:[5,13,34],log:[0,10,18,21,22,24,31,32,33,34,35],log_dir:[3,30],log_it:[31,32,33,34],log_lin:31,log_path:[18,22,24],logger:[10,22],logic:[0,1,3,30,36],logs_path:24,longer:[32,34],look:[3,27,30,31],lookup:31,loop:12,lose:0,loss:21,lost:[32,33,34],lot:[0,4],low:31,lowest:14,lr:21,m:[6,36],machin:12,macro:30,made:36,mai:[0,1,3,14,31,32,33,34],main:[0,1,4,7,16,20,22,34,36],mainstream:27,maintain:[0,1],make:[0,1,4,11,14,22,24,26,30,36],makedir:[19,22],manag:[0,7,11,24,34],management_api:[11,24],mani:[1,6,7,31],manner:14,manual:[3,4,32,33,34],map:[1,4,6,28,31,36],mappingproxi:6,mar:[21,24],mar_path:21,master:[7,24],matches_regex:31,materi:13,matter:30,matur:1,max:[6,21,36],max_epoch:22,max_restart:6,max_retri:[3,6,36],maximum:[0,6],mb:36,md:24,mean:[1,3,7,20,30],meaning:13,meant:[6,13,22],mechan:[26,36],membership:36,memmb:[1,3,6,14,15,18,36],memori:4,merg:4,messag:[3,13,30,36],metadata:[3,6,24,28,36],method:[1,4,5,6,20,28,31,32,33,34,35,36],methodnam:4,metric:[4,24,27,31],might:[0,4],mini:1,minimum:31,minit:[16,19],minut:[15,16,18,19,20,21,22,24,25,26],miss:36,ml:[1,27,30,36],mode:[16,19,22,31],model:[9,10,11,12,17,18,19,22,24,28,34],model_accuraci:31,model_jit:21,model_nam:[21,24],model_path:[11,24],modelcheckpoint:[0,22],models_path:24,modif:14,modifi:[24,30,36],modul:[1,3,4,5,14,19,20,22,28,31,36],monitor:[0,10,22],more:[0,1,4,6,8,20,24,25,26,28,30,32,33,34,35,36],most:[0,1,3,14,24,30,36],mount:34,move:36,msg:[3,13,30,33,35,36],much:[22,31],multi:[7,26,33],multipl:[1,3,4,6,25,26,31,32,34,36],must:[5,6,16,19,20,21,28,31,34,36],mutat:36,my:14,my_app:30,my_compon:31,my_imag:36,my_modul:[14,36],my_project:14,my_train:[3,36],my_train_script:6,my_trainer_spec:3,mycomponenttest:4,mypi:4,myschedul:14,n:[3,30],name:[1,3,6,7,11,15,18,21,22,24,25,26,28,30,31,34,36],named_resourc:[14,15,18,36],namespac:[16,20,22,24,33],napoleon:5,nativ:0,ndarrai:20,necessari:[4,36],need:[0,1,3,19,24,25,26,27,30,31,32,33,34,36],neither:36,net:21,never:[3,19],never_set:36,nevertheless:3,next:24,nn:21,nnode:[1,6,7],node:[1,3,4,6,7,12,26,28,31,36],non:[1,36],none:[0,3,4,6,7,11,15,16,18,19,20,21,22,24,25,26,28,31,32,33,34,35,36],nor:36,normal:[4,16,19,24],not_exist:34,notabl:28,note:[3,6,31,36],notebook:[0,15,16,17,18,19,20,21,22,23,24,25,26],noth:31,notic:30,notimplementederror:[32,33,34],now:[1,3,30],np:20,nproc_per_nod:[6,7],null_resourc:6,num_imag:19,num_replica:[1,3,4,6,13,25,28,30,36],num_restart:36,num_sampl:[19,22],number:[0,6,7,9,13,18,22,30,36],numer:3,numpi:[19,20],obj:36,object:[1,3,6,11,19,24,28,31,32,34,36],obtain:3,occur:36,often:[9,12],ok:31,omit:[1,3,30],onc:[0,14,24,25,26,27,31,32,34],one:[0,1,3,4,5,7,24,26,27,30,31,36],onli:[1,3,5,14,22,24,25,26,28,32,33,34,36],onto:[1,3],op:34,open:[1,16,19,20,24,25,26],oper:[13,24,25,28],opt:36,optim:[21,27],option:[0,3,4,5,6,7,11,15,18,19,24,28,30,31,32,33,34,35,36],order:[31,36],org:[10,11,14,28,31],organ:[5,14],origin:[33,35,36],orphan:34,os:[16,19,20,21,22,24],oss:[1,21,22],other:[0,1,3,4,6,19,24,31,32,33,34],otherwis:[20,31,32,33,34,36],our:[5,19,20,22,25,26,27,30],ourselv:30,out:[0,3,4,5,9,12,13,16,21,30,31,35,36],out_path:[20,21],output:[0,16,18,20,21,22,24,28,31,32,33,34],output_path:[15,16,18,19,20,22,24],over:[1,6,31,32,33,34],overhead:3,overlai:[6,20,36],overlap:[14,30],overrid:[31,32,34],overwrit:31,own:[0,1,3,24],p3:14,pack:[16,19],packag:[14,24,30,31],package_path:[24,25,26,28],page:5,pair:3,parallel:[1,7,12,24,30,36],param1:5,param2:5,param:[11,24],paramet:[1,3,6,7,11,13,21,28,30,31,32,33,34,36],parameter:1,pars:[4,31,36],parse_accuraci:31,parse_arg:[16,20,22,24],parser:[16,20,22,24],part:[26,28,29,31,36],partial:[31,33,35],particular:[3,36],particularli:14,partit:36,pass:[1,3,4,19,28,31,35,36],past:[30,31],path:[0,1,3,10,11,15,16,18,19,20,21,22,24,30,31,34,36],pattern:[3,12,31],pend:36,per:7,perform:[0,36],period:0,perman:1,persist:31,physic:36,pick:30,pil:[16,19],pip:[30,33],pipelin:[3,30],pipeline_func:[24,25,26,28],pixel:19,pl:[19,21,22],place:[3,19,20,22,24],plan:30,platform:[1,26,27,30],pleas:[3,22,32,36],plug:1,pluggabl:0,plugin:14,png:20,point:[0,1,3,6,14,30,31,32,33,34],pointer:1,polici:[6,34,36],poll:31,popen:3,popenrequest:[3,34],popul:36,port:[6,36],port_map:[3,6,28,36],portabl:1,posix:3,possibl:[0,1,4,14,26,31,32,33,34,36],practic:[27,30],pre:30,pre_proc:36,precis:0,predefin:[1,14],preemptibl:36,preemption:36,prefer:[4,34,36],prefix:[3,30],preproc:15,preprocess:[19,20,24],present:36,pretrain:18,pretti:[5,31],previou:[24,30,36],pri:31,primit:[5,36],primitive_kei:5,primitive_valu:5,print:[3,16,19,20,21,22,24,25,26,28,31,36],prior:[32,33,34],prioriti:[30,36],proceed:30,process:[3,6,7,15,20,24,32,34],process_imag:19,processed_data_path:24,prod:[4,36],produc:[24,28,32,33,34],product:34,programmat:[1,4,35],progress:[0,8,10,32,33,34,36],project:14,project_root:14,proper:1,properli:3,properti:[5,34],protip:1,protocol:28,provid:[0,1,3,4,6,9,10,11,12,13,24,28,29,30,31,33,35,36],proxi:6,ps:36,pt:[0,11,21],pull:[3,34,36],pure:[0,1,4],purg:[31,32,33,34],purpos:[1,5,20,24],put:[3,16,21],py:[1,3,5,6,7,14,15,16,18,19,20,21,22,24,25,26,30,31,32,34,36],pyre:[4,19,20,21],python3:6,python:[1,3,4,6,14,15,16,17,18,19,20,21,22,23,24,25,26,30,31],pytorch:[0,1,6,7,8,10,11,13,19,22,24,27,33,36],pytorch_lightn:[1,19,21,22],qualifi:[32,33,34],quantiz:0,queue:[25,28,33],quick:[19,30],quickli:[3,28],quickstart:[6,27],quit:0,r:[16,19],rais:[22,31,32,33,34],ram:36,rand:19,rand_image_:19,random:19,randomli:[19,22],rang:[19,32,33,34],rank:[3,31],rate:0,rather:[1,3,30,31,32,33,34,35],raw:[24,31,36],rb:[1,16],rdzv_backend:7,rdzv_endpoint:7,re:[4,24,36],reach:[32,33,34,36],read:[19,24,25,26,30,32,33,34,36],readabl:31,readi:[1,13],readm:24,readthedoc:[5,10],real:[30,34],reason:[0,31],rebuild:24,receiv:34,recent:36,recommend:[0,1,4,9,10,31],reconstruct:31,record:[31,32,33,34],recov:0,recreat:3,recurs:[13,14],refer:[1,3,5,14,29,30,32,33,34,36],referenc:30,regard:32,regex:[3,31,32,33,34],regist:[3,11,31,36],registr:[14,36],registri:[7,14],regress:21,regular:30,rel:[30,31,34],relat:27,relev:[14,34],reli:[0,3],relu:21,remot:[0,16,19,24,30,32,34],remote_path:[19,21],remov:31,render:9,rendezv:7,repetit:1,replac:36,replica:[3,6,7,13,28,30,31,32,33,34,35,36],replica_id:[3,30,36],replicaparam:3,replicast:36,report:31,repr:6,repres:[1,5,27,28,36],represent:[1,14,15],request:[3,6,31,32,36],requir:[1,4,7,12,16,20,22,24,30,33,34,36],resolut:31,resolv:[31,34,36],resourc:[1,3,6,7,15,18,25,28,31,32,34,35],resource_def:15,resource_from_app:[25,28],resourceop:28,respons:[6,24,36],rest:1,restart:[0,6,36],result:[0,3,4,6,20,24,28,32,34],resum:0,retain:3,retent:[3,32,33,34],retri:[6,34,36],retriev:[31,36],retry_polici:[3,6,36],retrypolici:[3,6,36],return_convergence_delta:20,reupload:16,reus:19,reusabl:0,rewritten:1,rgb:19,rm:16,role:[1,3,4,6,7,14,25,28,30,31,32,33,34,35],role_log_dir:3,role_nam:[3,31,32,33,34],role_param:3,rolestatu:36,root:[11,16,19,36],rpath:[16,19,21],rt:[24,25,26],run:[0,1,4,5,6,7,12,13,14,15,16,18,19,20,21,22,24,25,26,27,28,29,31,32,33,34,35],run_as_us:36,run_compon:[5,31],run_config:3,run_config_opt:36,run_opt:[3,31,32,33,34],runcfg:31,runconfig:[31,32,34,36],runner:[3,4,5,27,28,30],runopt:[3,30,31,32,33,34,36],runtest:4,runtim:[22,28,36],s3:[0,1,11,24,36],s3_input_path:1,s:[0,3,4,5,6,14,19,21,22,24,27,30,31,32,33,34,35,36],safe:32,same:[3,21,24,31,32,33,34,35,36],save:[15,16,18,19,20,21,22,36],save_dir:22,save_last:22,savefig:20,sbatch:35,scale:6,sched_nam:[3,14,30],schedmd:35,schedul:[4,5,6,7,24,25,28,31,33,34,35,36],scheduler_arg:[3,30,33],scheduler_backend:31,scheduler_nam:3,scheduler_param:[31,32],scratch:[1,4],script:[4,6,7,15,16,18,19,20,21,22,24,25,26,35],script_arg:[1,6,7],sdk:[5,25,26,27,28],seamless:0,second:[15,16,18,19,20,21,22,24,25,26],section:[1,7,30,36],see:[0,1,3,4,6,8,9,10,11,14,20,24,25,26,28,29,30,31,33,35,36],seek:[32,33,34],seen:3,select:36,self:[0,3,4,19,21,32,33,34,35],semant:[1,31,32],separ:[0,24,26],seri:20,serial:[21,36],serializ:0,serv:[24,27],serve_app:24,server:[0,3,36],servic:[4,24,32],session:[1,31,34,36],session_nam:[14,32,33,34,35],set:[0,3,6,7,14,22,24,25,30,34,36],set_tti:24,setup:[3,4,14,19,20,22,24,30],setuptool:14,sever:27,sh:[13,25,28,30,33],shell:35,shirt:[4,14],should:[1,3,4,5,14,24,25,26,31,32,33,34,36],should_tail:[31,32,33,34],show:[3,24,28,30],show_colorbar:20,shown:[3,30],shuffl:19,side:[3,10],sidecar:4,sigint:34,sign:20,signatur:14,sigterm:34,similar:[0,1,4,5,36],simpl:[1,3,4,16,21,30,36],simple_exampl:3,simpli:[1,3,5,7,13,30,32,34],simul:3,sinc:[0,1,3,4,6,28,30,31,32,33,34,35,36],singl:[1,4,6,12,16,19,21,26,28,36],single_gpu:1,size:[4,14,20,21,22,36],skip:[1,20],skip_export:[18,22],sleep:31,slurm:27,slurm_schedul:35,slurmbatchrequest:35,slurmschedul:35,smaller:22,so:[0,3,4,19,24,27,28,30,32,33,34],softwar:36,some:[0,1,3,16,24,32,33,34],someth:[24,28],sometim:20,somewher:24,soon:[8,27,31],sourc:[4,6,7,11,13,15,16,17,18,19,20,21,22,23,24,25,26,28,31,32,33,34,35,36],sparingli:[31,34],spawn:34,spec:[1,3,4,5,6,7,11,13,14,15,18,24,25,26,27,28,30,31,32,33,34,35],specif:[1,3,9,14,26,28,30,31,32,33,34,36],specifi:[1,3,4,14,19,24,30,31,32,33,34,35,36],sphinx:[15,16,17,18,19,20,21,22,23,24,25,26],sphinxcontrib:5,split:1,splitext:16,spot:[3,36],squeez:20,src:[0,13],stabl:10,stack:20,stage:[1,4,13,19,27],standalon:[0,1,21,27],standard:[0,22,24,26,27],stanford:[15,16,24],start:[0,27,30,31,34,36],stat:20,state:[0,31,32,33,34,36],statu:[31,33,35],status:36,stderr:[3,32,33,34],stdout:[3,13,30,32,33,34],step:[5,24,26,36],step_nam:21,still:3,stock:19,stop:[31,36],stopiter:[32,33,34],storag:[1,3,10,19,24],store:[1,24],store_tru:22,str:[1,3,4,5,6,7,11,13,14,15,16,18,19,20,21,22,24,28,30,31,32,33,34,35,36],straightforward:5,stricter:4,string:[3,4,14,15,30,34,36],struct:[1,27],structur:[0,5,14],structured_error_msg:36,stuck:[32,33,34],style:[1,4,6,7],sub:[1,31],subcommand:[3,30],submit:[1,3,31,32,33,34,35,36],submit_dryrun:[32,33,34,35,36],subprocess:[3,21],substitut:[13,36],succeed:36,successfulli:[31,34,36],support:[0,1,4,5,6,8,13,14,28,30,31,32,33,34,35,36],sure:24,surviv:36,svc:24,sy:[16,20,22,24],syntax:26,system:1,t:[0,1,4,12,14,21,24,28,30],tail:[3,32,33,34],take:[1,3,4,7,24,25,26,27,28,30,32,33,34,35],tar:[16,19,36],tar_path:[16,19],tarfil:[16,19],target:[1,20],task:0,tax:3,tcp_store:36,team:14,teardown:19,technic:3,tempfil:[16,20,22],templat:36,templet:[1,5],temporarydirectori:[16,20,22],tensor:[20,21],tensorboard:[0,10,18,22,24,36],tensorboard_tutori:10,tensorboardlogg:[10,22],term:31,termin:[31,32,33,34,36],test:[5,14,19,20,22,25,28,30,33],test_app:14,test_d:19,test_dataload:[19,20],test_main:0,test_my_comp:4,test_nam:7,test_path:19,testcas:[0,4],testresult:4,text:36,th:[31,32,33,34],than:[1,4,30,31,32,33,34,35,36],thei:[1,4,7,14,31,32,33,34,36],them:[0,1,3,4,5,19,20,24,25,28,35,36],thi:[0,1,3,4,5,7,13,14,15,16,18,19,20,21,22,24,25,26,28,30,31,32,33,34,35,36],thing:[0,3,4,30],think:[1,5],those:[1,28,32],thread:[32,34,36],three:3,through:[1,3,14,28,30,36],thu:[9,36],time:[1,3,6,15,16,18,19,20,21,22,24,25,26,30,31,32,33,34],timeout:[32,33,34],tini:[15,16,17,19,24],tiny_image_net:[21,24],tinyimagenetdatamodul:[19,20,22],tinyimagenetdataset:19,tinyimagenetmodel:[20,21,22],titl:20,tmp:[1,3,13,22,24,28,30,34],tmpdir:[16,19,20,21,22],todo:21,togeth:[3,25,26,35],toi:[20,21],tool:[1,3,11,35,36],top:1,topilimag:[16,19],topolog:[1,7],torch:[1,4,6,7,14,19,20,21,36],torch_dist_rol:[14,36],torchelast:6,torchelastic_error_fil:3,torchmetr:21,torchscript:21,torchserv:[11,21,24],torchvis:[16,19],torchx:[0,1,3,4,6,7,8,9,10,11,12,13,14,15,16,18,20,22,24,25,26,29,30,33,34,35],torchx_:3,torchx_asmtmyqj:3,torchx_imag:24,torchx_kiuk:3,torchx_us:[33,35],total:[15,16,18,19,20,21,22,24,25,26,31],totensor:[16,19],touch:[1,3,13,30],tp:36,tqdm:[16,19],track:[10,24,33],train:[4,10,14,18,19,20,21,22,24,27],train_acc:21,train_app:36,train_d:19,train_dataload:19,train_loss:22,train_path:19,trainer:[0,1,3,4,6,10,14,20,24,28,31,36],trainer_app:24,trainer_prod:4,trainer_test:4,training_step:21,transfer:[0,15],transform:[16,19,24,28],transit:[0,31],translat:3,travers:14,tri:[1,26,30],trivial:[32,33,34,35,36],tupl:[21,28],tutori:[10,13,20],twice:[32,33,34],two:[1,14,24,30],txt:[14,36],type:[0,1,3,4,5,6,7,11,14,15,16,18,19,20,21,22,24,30,32,36],type_:36,typic:[0,1,24,25,26,34,36],uber:36,ubuntu:30,ui:[4,24,25,26,28],ui_metadata:[24,28],ui_url:36,uint8:19,uml:1,unblock:31,undefin:[6,31,32,33,34],under:[1,3,24],underli:[4,32,33,34],understand:[1,4,9,26,28,30],understood:[1,3],unextract:19,union:[31,36],uniqu:[32,35,36],unit:[0,5],unittest:[0,4],unknown:36,unknownappexcept:31,unlik:[1,30],unspecifi:28,unsubmit:36,unsuccess:36,unsuccessfulli:36,until:[1,31,32,33,34],untouch:36,up:[1,6,24,28,31,34,36],upload:[0,16,21,24,25,26],upon:[31,36],upstream:1,url:[3,11,13,15,16,36],us:[0,1,3,4,5,6,7,9,10,11,12,13,14,15,18,19,20,21,22,24,25,26,27,28,30,31,32,33,34,35,36],usag:[3,30,31,36],user:[0,1,3,4,6,14,15,18,31,34,36],util:[0,1,3,4,19,24,27,30,33,35],v1:[30,33],v2:30,v:3,val:[19,21],val_acc:21,val_batch:21,val_d:19,val_dataload:19,val_path:19,valid:[4,5,13,24,30,31,32,34,36],validation_step:21,valu:[7,30,36],valuabl:3,valueerror:[22,34],vari:[1,24],variabl:[6,7,13,15,18,36],varieti:1,variou:1,vcpu:14,ve:[24,30],veri:[3,9,21],version:[0,6,21,22,24,30,33],via:[0,5,6,10,13,14,16,19,24,25,26,31,32,33,34,35,36],view:[0,21],viewer:28,vision:[19,22],visual:20,visualize_image_attr:20,viz:20,volcano:[25,28,33],vs:36,w:16,wa:[3,31,32,36],wai:[0,1,14,30,36],wait:[31,32],wait_interv:31,walk:[16,19],want:[0,1,3,4,14,24,30,36],wb:20,we:[0,1,4,5,9,10,12,19,24,25,26,30],weight:20,well:[0,3,4,5,12,13,24,28,31],were:[1,3,31],what:[1,4,5,24,30,31,32,33,34,36],whatev:1,when:[0,1,3,4,6,7,14,24,28,31,32,33,34,36],where:[24,28,30],wherev:26,whether:3,which:[0,1,3,4,6,19,22,28,30,32,33,34,36],who:36,why:[0,21,28],widespread:0,within:[0,7,24,31,32,36],without:[0,3,31,36],work:[0,24,25,33,34,36],worker:[1,6,7,15,24],workflow:[1,3,13,19,27],world:[1,13,30],would:[0,1,4,24,30,31,32,34],wrap:[32,34],wrapper:3,write:[0,1,3,4,5,19,27,36],written:[0,1,35],www:28,x:[19,21],y:21,y_pred:21,yaml:[1,24,25,26,28],yet:[8,36],you:[0,1,3,4,5,10,12,14,22,24,25,26,27,28,30,36],your:[0,1,3,4,9,10,11,12,14,21,22,24,25,26,27,31,36],yourself:30,zero:[1,20,36],zero_grad:20,zip:[15,16,17,23,24],zip_ref:16,zipfil:16},titles:["App Best Practices","Basics","Coming Soon","CLI","Component Best Practices","torchx.components","Base","Distributed","Hyperparameter Optimization","Interpret","Metrics","Serve","Train","Utils","Configuring","Datapreproc Component Example","Data Preprocessing App Example","Application Examples","Trainer Component Example","Trainer Datasets Example","Model Interpretability App Example","Tiny ImageNet Model","Trainer App Example","Pipelines Examples","Advanced KubeFlow Pipelines Example","Distributed KubeFlow Pipelines Example","Intro KubeFlow Pipelines Example","TorchX","torchx.pipelines","Kubeflow Pipelines","Quickstart","torchx.runner","torchx.schedulers","Kubernetes","Localhost","Slurm","torchx.specs"],titleterms:{On:30,With:27,adapt:[1,27],advanc:24,all:4,api:27,app:[0,16,20,22],appdef:[1,36],applic:17,archiv:0,argument:[4,24],base:6,basic:1,best:[0,4],beta:27,branch:4,builtin:[3,30],checkpoint:0,classi:17,cli:3,come:2,compon:[1,3,4,5,12,14,15,18,24,27,30],compos:4,concept:1,config:36,configur:14,creat:24,custom:14,data:[0,16,17],datapreproc:15,dataset:19,defin:[4,30],definit:24,describ:3,distribut:[4,7,25],document:27,dryrun:3,exampl:[12,15,16,17,18,19,20,22,23,24,25,26,27],experiment:27,featur:27,fine:0,hyper:0,hyperparamet:8,imag:[30,34],imagenet:21,infer:0,input:24,inspect:3,integr:4,interpret:[0,9,20],intro:26,job:3,kfp:28,kubeflow:[23,24,25,26,29],kubernet:33,librari:27,lightn:17,list:3,localhost:34,log:3,logic:4,loop:0,macro:36,mar:0,metric:[0,10],model:[0,20,21],name:[4,14],next:30,optim:[0,8],other:30,own:30,packag:0,paramet:0,pass:0,pipelin:[1,23,24,25,26,27,28,29],practic:[0,4],preprocess:[16,17],process:4,project:1,provid:34,python:0,queri:3,quickstart:30,refer:10,regist:14,resourc:[4,14,36],role:36,run:[3,30,36],runner:[1,31],runtim:1,save:0,schedul:[1,3,14,27,30,32],serv:[0,11],simplifi:4,slurm:35,soon:2,spec:36,statu:[3,36],step:30,storag:0,structur:1,support:3,test:[0,4],tini:21,torch:0,torchscript:0,torchserv:0,torchx:[5,27,28,31,32,36],train:[0,12],trainer:[12,17,18,19,22],tune:0,unit:4,usag:27,util:13,view:3,vision:17,weight:0,what:3,work:27,your:30}})