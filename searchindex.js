Search.setIndex({docnames:["CONTRIBUTING","FAQ","Library","Summarization","examples","extended","im2text","index","main","modules","onmt","onmt.inputters","onmt.modules","onmt.translate.translation_server","onmt.translation","options/preprocess","options/server","options/train","options/translate","quickstart","ref","speech2text"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["CONTRIBUTING.md","FAQ.md","Library.md","Summarization.md","examples.rst","extended.md","im2text.md","index.rst","main.md","modules.rst","onmt.rst","onmt.inputters.rst","onmt.modules.rst","onmt.translate.translation_server.rst","onmt.translation.rst","options/preprocess.rst","options/server.rst","options/train.rst","options/translate.rst","quickstart.md","ref.rst","speech2text.md"],objects:{"onmt.Trainer":{train:[10,1,1,""],validate:[10,1,1,""]},"onmt.decoders":{CNNDecoder:[12,0,1,""],DecoderBase:[12,0,1,""],InputFeedRNNDecoder:[12,0,1,""],StdRNNDecoder:[12,0,1,""],TransformerDecoder:[12,0,1,""]},"onmt.decoders.CNNDecoder":{forward:[12,1,1,""],from_opt:[12,2,1,""],init_state:[12,1,1,""]},"onmt.decoders.DecoderBase":{from_opt:[12,2,1,""]},"onmt.decoders.TransformerDecoder":{forward:[12,1,1,""],from_opt:[12,2,1,""],init_state:[12,1,1,""]},"onmt.decoders.decoder":{RNNDecoderBase:[12,0,1,""]},"onmt.decoders.decoder.RNNDecoderBase":{forward:[12,1,1,""],from_opt:[12,2,1,""],init_state:[12,1,1,""]},"onmt.encoders":{AudioEncoder:[12,0,1,""],CNNEncoder:[12,0,1,""],EncoderBase:[12,0,1,""],ImageEncoder:[12,0,1,""],MeanEncoder:[12,0,1,""],RNNEncoder:[12,0,1,""],TransformerEncoder:[12,0,1,""]},"onmt.encoders.AudioEncoder":{forward:[12,1,1,""],from_opt:[12,2,1,""]},"onmt.encoders.CNNEncoder":{forward:[12,1,1,""],from_opt:[12,2,1,""]},"onmt.encoders.EncoderBase":{forward:[12,1,1,""]},"onmt.encoders.ImageEncoder":{forward:[12,1,1,""],from_opt:[12,2,1,""],load_pretrained_vectors:[12,1,1,""]},"onmt.encoders.MeanEncoder":{forward:[12,1,1,""],from_opt:[12,2,1,""]},"onmt.encoders.RNNEncoder":{forward:[12,1,1,""],from_opt:[12,2,1,""]},"onmt.encoders.TransformerEncoder":{forward:[12,1,1,""],from_opt:[12,2,1,""]},"onmt.inputters":{AudioDataReader:[11,0,1,""],DataReaderBase:[11,0,1,""],Dataset:[11,0,1,""],ImageDataReader:[11,0,1,""],TextDataReader:[11,0,1,""]},"onmt.inputters.AudioDataReader":{from_opt:[11,2,1,""],read:[11,1,1,""]},"onmt.inputters.DataReaderBase":{from_opt:[11,2,1,""],read:[11,1,1,""]},"onmt.inputters.ImageDataReader":{from_opt:[11,2,1,""],read:[11,1,1,""]},"onmt.inputters.TextDataReader":{read:[11,1,1,""]},"onmt.inputters.datareader_base":{MissingDependencyException:[11,3,1,""]},"onmt.models":{NMTModel:[10,0,1,""]},"onmt.models.NMTModel":{forward:[10,1,1,""]},"onmt.models.sru":{SRU:[12,0,1,""]},"onmt.models.sru.SRU":{forward:[12,1,1,""]},"onmt.modules":{AverageAttention:[12,0,1,""],ConvMultiStepAttention:[12,0,1,""],CopyGenerator:[12,0,1,""],Embeddings:[12,0,1,""],GlobalAttention:[12,0,1,""],MultiHeadedAttention:[12,0,1,""],PositionalEncoding:[12,0,1,""],WeightNormConv2d:[12,0,1,""]},"onmt.modules.AverageAttention":{cumulative_average:[12,1,1,""],cumulative_average_mask:[12,1,1,""],forward:[12,1,1,""]},"onmt.modules.ConvMultiStepAttention":{apply_mask:[12,1,1,""],forward:[12,1,1,""]},"onmt.modules.CopyGenerator":{forward:[12,1,1,""]},"onmt.modules.Embeddings":{emb_luts:[12,4,1,""],forward:[12,1,1,""],load_pretrained_vectors:[12,1,1,""],word_lut:[12,4,1,""]},"onmt.modules.GlobalAttention":{forward:[12,1,1,""],score:[12,1,1,""]},"onmt.modules.MultiHeadedAttention":{forward:[12,1,1,""]},"onmt.modules.PositionalEncoding":{forward:[12,1,1,""]},"onmt.modules.WeightNormConv2d":{forward:[12,1,1,""]},"onmt.modules.position_ffn":{PositionwiseFeedForward:[12,0,1,""]},"onmt.modules.position_ffn.PositionwiseFeedForward":{forward:[12,1,1,""]},"onmt.modules.structured_attention":{MatrixTree:[12,0,1,""]},"onmt.modules.structured_attention.MatrixTree":{forward:[12,1,1,""]},"onmt.translate":{BeamSearch:[14,0,1,""],DecodeStrategy:[14,0,1,""],GNMTGlobalScorer:[14,0,1,""],RandomSampling:[14,0,1,""],Translation:[14,0,1,""],TranslationBuilder:[14,0,1,""],Translator:[14,0,1,""]},"onmt.translate.BeamSearch":{advance:[14,1,1,""],update_finished:[14,1,1,""]},"onmt.translate.DecodeStrategy":{advance:[14,1,1,""],update_finished:[14,1,1,""]},"onmt.translate.GNMTGlobalScorer":{score:[14,1,1,""],update_global_state:[14,1,1,""],update_score:[14,1,1,""]},"onmt.translate.RandomSampling":{advance:[14,1,1,""],update_finished:[14,1,1,""]},"onmt.translate.Translation":{log:[14,1,1,""]},"onmt.translate.Translator":{from_opt:[14,2,1,""],translate:[14,1,1,""],translate_batch:[14,1,1,""]},"onmt.translate.penalties":{PenaltyBuilder:[14,0,1,""]},"onmt.translate.penalties.PenaltyBuilder":{coverage_none:[14,1,1,""],coverage_summary:[14,1,1,""],coverage_wu:[14,1,1,""],length_average:[14,1,1,""],length_none:[14,1,1,""],length_wu:[14,1,1,""]},"onmt.translate.random_sampling":{sample_with_temperature:[14,5,1,""]},"onmt.translate.translation_server":{ServerModel:[13,0,1,""],ServerModelError:[13,3,1,""],Timer:[13,0,1,""],TranslationServer:[13,0,1,""]},"onmt.translate.translation_server.ServerModel":{detokenize:[13,1,1,""],do_timeout:[13,1,1,""],maybe_detokenize:[13,1,1,""],maybe_tokenize:[13,1,1,""],parse_opt:[13,1,1,""],to_gpu:[13,1,1,""],tokenize:[13,1,1,""]},"onmt.translate.translation_server.TranslationServer":{clone_model:[13,1,1,""],list_models:[13,1,1,""],load_model:[13,1,1,""],preload_model:[13,1,1,""],run:[13,1,1,""],start:[13,1,1,""],unload_model:[13,1,1,""]},"onmt.utils":{Optimizer:[10,0,1,""],Statistics:[10,0,1,""]},"onmt.utils.Optimizer":{backward:[10,1,1,""],from_opt:[10,2,1,""],learning_rate:[10,1,1,""],step:[10,1,1,""],training_step:[10,4,1,""],zero_grad:[10,1,1,""]},"onmt.utils.Statistics":{accuracy:[10,1,1,""],all_gather_stats:[10,6,1,""],all_gather_stats_list:[10,6,1,""],elapsed_time:[10,1,1,""],log_tensorboard:[10,1,1,""],output:[10,1,1,""],ppl:[10,1,1,""],update:[10,1,1,""],xent:[10,1,1,""]},"onmt.utils.loss":{LossComputeBase:[10,0,1,""]},onmt:{Trainer:[10,0,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","classmethod","Python class method"],"3":["py","exception","Python exception"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"],"6":["py","staticmethod","Python static method"]},objtypes:{"0":"py:class","1":"py:method","2":"py:classmethod","3":"py:exception","4":"py:attribute","5":"py:function","6":"py:staticmethod"},terms:{"0473v3":20,"100d":1,"100k":6,"abstract":[3,12],"boolean":[10,11],"case":11,"class":[0,2,7,10,11,12,13],"default":[4,11,15,16,17,18,19,21],"export":1,"f\u00fcr":2,"final":[2,3,12,14],"float":[11,12,14],"function":[0,2,11,12,13,14,17],"import":[0,2,3,11],"int":[10,11,12,13,14],"long":[0,14],"new":[0,4,19],"null":[4,19],"return":[0,10,11,12,13,14],"short":[11,21],"static":[10,17],"true":[2,11,12,14,17,18],"try":[0,3,4,19],"void":[4,19],"while":[11,12],And:[0,4,5,8,12],EOS:14,For:[0,2,3,4,14,17,19],IDs:14,Its:2,Not:[0,2],The:[1,2,3,4,5,6,8,10,11,12,13,14,17,19,21],Then:[0,12],There:11,These:[12,14],Use:[11,14,17],Used:[11,14],Uses:3,Using:[1,15,17,18],__init__:[13,14],_batch_index:14,_batch_offset:14,_beam_offset:14,_compute_loss:10,_coverag:14,_dir:11,_e13:[4,5],_prev_penalti:14,a_j:12,abbrevi:0,abigail:20,abil:12,about:[0,4,19],abov:[0,6,14],abs:[17,20],absolut:11,acc:2,acceler:[12,20],accept:[0,4,11,14,19],access:3,accord:11,account:3,accross:10,accum:[1,10],accum_count:[1,3,10,17],accum_step:[10,17],accumul:[1,3,10,17],accuraci:[2,10],achiev:3,achin:20,acknowledg:7,acl:[3,8,20],aclweb:17,across:17,action:[12,17],activ:[12,17],actual:[11,14],adadelta:17,adafactor:17,adagrad:[3,17],adagrad_accumulator_init:[3,17],adam:[1,3,17,21],adam_beta1:17,adam_beta2:[1,3,17],adamoptim:17,adapt:21,add:[0,1,12],added:3,adding:[0,3],addit:[0,3,7,11,12,17],addition:[3,12],address:14,adopt:17,adpot:12,advanc:[4,14,19],advantag:11,advic:0,aerob:[4,19],after:[0,3,12,14,17,18],afterward:12,again:0,aidan:20,alexand:[3,8],algorithm:3,align:[3,12,20],alive_attn:14,alive_seq:14,all:[0,10,12,14,17,20,21],all_gather_stat:10,all_gather_stats_list:10,all_predict:14,all_scor:14,allennlp:0,allow:[0,3,11,17],almost:[14,17],alon:0,alpha:[2,3,14,18],alreadi:2,also:[0,2,3,10,11,12,17],altern:[7,8,11,14],although:12,alwai:0,amend:2,amount:[3,12,17],an4_dataset:21,ani:[0,3,11,14],annurev:20,anoth:[0,10],antholog:17,antich:[4,19],api:[0,7],api_doc:17,apo:[2,4,19],appeal:2,appli:[3,11,12,14,17,18,21],applic:18,apply_mask:12,approach:[3,6,12,21],appropri:14,approxim:17,apt:21,architectur:7,arg:[0,13],argmax:18,argpars:[11,13,14],argument:[0,7,11],around:[2,3,12],articl:[2,3],artzi:20,arxiv:[0,17,20],ashish:20,assign:18,associ:2,assum:[2,3,6,12,14,21],atok:[4,5],attent:[0,2,3,7,10,11,14,18,20,21],attet:12,attn:[12,14,18],attn_debug:[2,14,18],attn_func:12,attn_typ:12,attr:13,attribut:[11,14],audio:[10,11,12,15,17,18,21],audio_enc_pool:[17,21],audiodataread:11,audioencod:12,auli:20,australia:3,australian:3,author:[3,8,12],autodoc:0,automat:2,avail:[10,12,13,17],available_model:16,averag:[12,17,18,20],average_decai:[10,17],average_everi:[10,17],average_output:12,averageattent:12,avg:[2,18],avg_raw_prob:18,avoid:0,axi:14,back:10,backend:17,backward:10,bahdanau:[3,12,17,20],bank:[12,14],barri:20,base:[0,1,2,3,6,10,11,12,13,14,18,20,21],base_field:2,base_target_emb:12,baselin:[3,17],bash:4,batch:[1,2,10,11,12,14,17,18],batch_siz:[1,2,3,6,12,14,17,18,21],batch_size_fn:2,batch_size_multipl:2,batch_typ:[1,3,17],bcb14:[12,20],beam:[3,4,7,14,19],beam_siz:[3,6,14,18],beamsearch:14,bear:1,beat:[4,19],becaus:18,becom:3,been:[4,12,14,19],befor:[0,1,3,13,18],begin:[2,10,14],behavior:11,being:2,below:[0,3,4,5],bengio:[3,20],best:[14,18],beta1:17,beta2:17,beta:[2,3,14,18],better:[0,3],between:[3,17,20],beyond:10,biao:20,bias:2,bib:0,bibtex:0,bibtext:0,bidirect:[2,3,12],bidirectional_encod:[2,12],billion:3,bin:3,binari:12,bit:11,blank:0,bleu:[4,5,14,18],blob:12,block:[14,18],block_ngram_repeat:[3,14,18],booktitl:[3,8],bool:[10,11,12,13,14],bos:14,both:[2,4,17,19],bottom:3,boundari:3,bptt:[10,17],bridg:[3,17,20],brnn:[3,6,12,17],browser:0,buffer:10,build:[0,2,10,12,14,15,18],builder:2,built:[6,21],bunch:1,bureaucraci:[4,19],bytetensor:14,cach:12,calcul:[10,12,14],call:[3,12,14,18],callabl:[11,14],came:[4,19],can:[3,4,6,7,8,10,11,14,15,17,18,19],cancel:13,cao:20,capit:0,caption:6,card:1,care:12,categor:14,categori:14,cdot:6,certain:14,chain:2,chang:[0,3,10,17],channel:[8,11],channel_s:11,charact:[0,6,11,21],check:[0,2,3],checklist:0,checkpoint:[10,14,17],chen:20,cho:[3,20],choic:[0,3,15,17,18],choos:0,chosen:14,christoph:20,citat:[0,7],cite:[0,3,8],claim:2,classmethod:[10,11,12,14],clear:0,clone:[3,8,13],clone_model:13,close:0,cloth:[4,19],cls:10,clutter:0,cnn:[12,17,20,21],cnn_kernel_width:[12,17],cnndecod:12,cnndm:3,cnnencod:12,code:[0,2,3],codec:14,collabor:[4,19],com:[3,4,8,12,21],combin:[12,18],comma:[12,17],command:[1,3,4,6,14,18,19],comment:0,commod:3,common:0,commun:[0,1],compil:6,complet:6,comput:[1,2,3,10,12,17,18],concat:[12,17],concaten:17,conda:6,condit:18,conf:16,confer:3,config:[13,15,16,17,18],config_fil:13,confirm:1,conform:11,consid:[3,12],consider:17,consist:[0,4,6,12,19],construct:12,constructor:[0,11,12,14],contain:[4,6,11,12,13,14,19,21],content:[0,4,14,19],context:[12,17],context_g:[12,17],contextg:12,continu:0,contribut:[0,12],contributor:7,control:10,conv2conv:7,conv2d:12,conv:[12,17],convent:0,converg:[4,19],convers:[6,14,21],convex:12,convmultistepattent:12,convolut:[12,20,21],copi:[0,3,7,11,14,17,18],copy_attn:[3,12,14,17],copy_attn_forc:17,copy_attn_typ:[12,17],copy_loss_by_seqlength:[3,17],copygener:12,core:[2,7,10],corpu:[3,15],corr:[0,20],correct:[1,3],correspond:18,could:14,count:[1,14],coupl:3,court:2,cov:14,cov_pen:14,coverag:[3,12,14,17,18],coverage_attn:[12,17],coverage_non:14,coverage_penalti:[2,3,14,18],coverage_summari:14,coverage_wu:14,cpu:[2,13],crayon:17,creat:[2,10,11,15,18],crimin:2,criteria:17,criterion:[2,10],critic:[15,17,18],cross:10,ctrl:0,cuda:[1,2,19],cuda_funct:12,cuda_visible_devic:4,cudnn:12,cumul:12,cumulative_averag:12,cumulative_average_mask:12,cur_len:14,current:[3,10,12,14,17],custom:17,cut:0,cutoff:14,cv2:11,d_ff:12,d_model:12,das:2,data:[1,2,4,5,6,7,10,14,17,21],data_arg:11,data_typ:[6,10,14,15,18,21],dataread:11,datareader_bas:11,datareaderbas:[11,14],dataset:[2,3,4,6,7,14,15,17,18,19],dataset_path:2,datasetlazyit:2,datastructur:13,dauphin:20,david:20,dblp:0,dcs:[4,5],ddress:20,de2:1,deal:2,debug:[14,15,16,17,18],dec:[1,17],dec_lay:[12,17,21],dec_out:12,dec_rnn_siz:[12,17,21],decai:17,decay_method:[1,3,17],decay_step:17,decemb:2,decod:[1,2,3,4,7,10,18,19,21],decode_strategi:14,decoder_embed:2,decoder_typ:[1,3,17],decoderbas:[10,12],decodestrategi:14,decompil:6,decreas:[3,14],deep:[6,21],deepspeech:21,def:0,defeat:2,deficit:3,defin:12,definit:12,delimit:18,delta:6,demo:[4,6,19,21],deng:[3,8],deni:20,denot:14,depend:[0,7,10,12,13],deprec:[15,17,18],der:2,describ:[3,8,11,12,17],descript:0,detail:[6,8,11,17],determin:11,detoken:13,dev:21,develop:0,devic:[1,2,14,18,19],deyi:20,dict:[10,11,12,13,14],dict_fil:1,dictionari:[3,10,11,12,14,15,17,18],did:3,die:2,differ:[0,1,3,12,13,17,18],dilat:12,dim:[2,12],dimens:[3,12,14],dimension:[3,12],dir:11,direct:[0,3],directli:[0,3,12,18],directori:[6,8,11,13,15,17,18,21],disabl:17,disadvantag:2,discourag:17,disk:[2,11],dismiss:2,displai:10,dist:10,distanc:17,distribtut:12,distribut:[4,10,12,14,17,18,19],divid:[3,11,15,17,18],divis:12,do_timeout:13,doc:0,docker:8,dockerfil:8,document:[0,3,6,8,14,21],doe:[2,3,18],doi:[8,20],doing:18,dollar:3,don:[0,14],done:[4,5,14],dot:[3,12,17],dotprod:17,down:[4,14,19],download:[4,5,6,19,21],drastic:3,driven:6,dropout:[1,3,12,17,21],due:[3,17],dump:18,dump_beam:[14,18],dure:[2,3,13,17,18],dynam:[11,12,15,17,18],dynamic_dict:[3,15,18],dzmitri:20,each:[1,11,12,14,15,17,18],earli:17,early_stop:17,early_stopping_criteria:17,earlystopp:10,easi:[0,11],econom:2,edu:[1,6,21],effect:[1,3,12,13],effici:[7,10],ein:2,either:[11,12,14,17],elaps:10,elapsed_tim:10,els:2,emb:[3,12],emb_fil:12,emb_file_both:1,emb_file_dec:1,emb_file_enc:1,emb_lut:12,emb_siz:2,embed:[2,3,7,12],embedding_s:12,embeddings_to_torch:1,emnlp:[3,20],empir:3,emploi:10,empti:[12,14],enabl:14,enc:[1,17],enc_hidden:12,enc_lay:[12,17,21],enc_pool:12,enc_rnn_siz:[12,17,21],encod:[1,2,3,4,7,10,14,19,21],encoder_embed:2,encoder_fin:12,encoder_out_combin:12,encoder_out_top:12,encoder_typ:[1,3,6,17],encoderbas:[10,12],end:14,ensembl:[7,18],ensur:3,enter:2,entri:0,entropi:10,eos:14,epoch:17,eps:12,epsilon:17,equal:[14,17],equat:12,equival:[3,17],error:[0,15,17,18],escap:[4,5],essenti:14,etc:12,eural:20,evalu:[4,5,7,10,19],event:14,everi:[2,3,10,12,14,15,17,18],evok:2,exactli:0,exampl:[0,1,2,3,4,5,6,7,11,14,19,21],exce:[3,17],except:[0,11,13,15,17,18],exclusion_token:14,exhaust:14,exist:[11,15,18],exp:17,exp_host:17,expect:14,experi:[3,17],experiment:17,exponenti:17,extend:[0,3,12],extent:[4,19],extern:0,extra:1,extra_word:12,fail:[3,11],fairseq:0,fals:[2,10,12,13,14,15,16,17,18],familiar:8,faq:[4,7,19],fast:[12,20],faster:[12,15,17,18],feat_dim_expon:12,feat_merg:[12,17],feat_merge_s:17,feat_padding_idx:12,feat_vec_expon:[12,17],feat_vec_s:[12,17],feat_vocab_s:12,featur:[7,10,11,12,15,20,21],features_vocabs_prefix:15,feder:[4,19],feed:[2,12,17],feel:0,few:0,ffectiv:20,ffn:12,field:[2,11,14],figur:[3,12],file:[0,1,3,4,6,11,13,14,15,17,18,19,21],filenam:[11,17],files2roug:3,filter:15,filter_pr:11,filter_valid:15,find:[0,3,8],finish:14,firefox:0,first:[0,1,12,17,21],fit:[4,19],fix:[0,3,17],fix_word_vec:12,fix_word_vecs_dec:17,fix_word_vecs_enc:17,flag:10,flake8:0,flat:14,floattensor:[10,12,14],fmt:21,fnn:12,focu:0,folder:[0,4,19],follow:[0,1,3,8],foo:0,forc:[14,18],form:3,format:[0,3,13,15,17],former:[2,12],formula:6,fortunato:3,forum:8,forward:[10,12,17],found:3,four:[1,6],fourier:21,fp16:[17,18],fp32:[10,17,18],frac:6,framework:[7,9,17],free:[0,2,13],frequenc:14,from:[1,2,3,4,6,10,11,12,14,17,18,19,21],from_batch:2,from_opt:[10,11,12,14],frozenset:14,full:[0,13,18],fulli:12,fusedadam:17,gag:[12,20],gao:20,gap:20,gas:2,gate:17,gather:10,gating_output:12,gbp:1,gehr:20,gehrmann2018bottom:3,gehrmann:3,gener:[0,1,2,3,7,10,11,12,14,15,18,20,21],generator_funct:17,get:[1,2,3,6,7,14,20,21],get_field:11,gibt:2,giga:3,git:[3,8,21],github:[3,4,8,12,21],gitter:8,give:[17,18],given:[6,13,21],global:[2,12],global_attent:[3,17,21],global_attention_funct:17,global_scor:[2,14],globalattent:12,glove:7,glove_dir:1,gnmt:14,gnmtglobalscor:[2,14],goal:6,going:[4,19],gold:14,gold_scor:14,gold_sent:14,gomez:20,gone:17,good:[0,17],googl:[0,1,14,18,20],gpu:[2,3,4,5,6,7,13,14,17,18,19,21],gpu_backend:17,gpu_rank:[1,3,4,5,6,10,17,19,21],gpu_verbose_level:[10,17],gpuid:17,grad:10,gradient:[1,2,3,10,17],gram:[3,14],grangier:20,grayscal:[15,17,18],group:[4,12,17,19],grow:14,gru:[12,17],gtx1080:18,guidelin:7,guillaum:8,gym:[4,19],h_j:12,h_s:12,h_t:12,had:18,haddow:20,ham:[15,18,21],handl:[0,2,10],harvard:[6,21],harvardnlp:4,has:[2,3,4,14,15,18,19],has_cov_pen:14,has_len_pen:14,has_tgt:14,have:[0,1,2,3,4,11,12,14,15,17,18,19],head:[1,4,12,17,19],head_count:12,hear:2,help:[0,3,4,8,18,19],henc:6,here:[1,2,3],hid:3,hidden:[3,4,10,12,17,19],hidden_s:[2,12],hieu:20,higher:[1,14,17,18],highest:18,highlight:14,hold:14,hook:12,how:[3,7,8,11,12,14],howev:[0,3,10,12],html:[0,4,5],http:[1,3,4,5,6,8,12,17,20,21],human:20,hyperparamet:1,hypothes:14,iclr:[3,20],identifi:18,ids:2,ignor:[12,18],ignore_index:2,ignore_when_block:[3,14,18],illia:20,ilya:20,im2latex:6,im2text:6,im2text_smal:6,imag:[7,10,11,12,15,17,18],image0_path:6,image1_path:6,image2_path:6,image_chanel_s:12,image_channel_s:[6,15,17,18],imagedataread:11,imageencod:12,img:[6,10,11,15,17,18],img_dir:11,implement:[3,4,10,11,12,17,19],impli:12,imprison:2,improv:[12,17,20],in_channel:12,includ:[0,3,8,11,12],incorpor:17,index:[11,12],indic:[10,11,12,14,17],inf:14,infer:[6,7],info:[1,2,15,17,18],inform:[17,18],init:[12,17],init_scal:12,init_st:[10,12],initi:[1,3,7,10,12,14],initial_accumulator_valu:17,inner:12,inp:14,inp_seq_len:14,inproceed:[3,8],input:[2,3,10,11,12,13,14,15,17,18,20],input_fe:17,input_feed:12,input_from_dec:12,input_len:12,input_s:12,inputfeedrnndecod:[2,12],inputs_len:12,inputt:[2,11,14],instal:[0,3,6,7,21],instanc:[2,10,12,14],instanti:[10,11],instead:[0,3,12,15,18],instruct:[3,17],instructor:[4,19],integ:14,integr:0,inter:1,interest:2,interfac:[10,12],intern:13,interv:17,introduc:3,is_avail:2,is_finish:14,is_train:2,isn:14,ist:2,italian:[4,19],item:[11,12],iter:[2,10,11],itertool:2,its:[0,2,11,12,14],itself:2,jaitli:3,jakob:20,jean:8,jinsong:20,jointli:[3,12,20],jona:20,jone:20,journal:0,json:16,june:3,just:[11,14],kaiser:20,keep:[2,13,14,15,17],keep_checkpoint:17,keep_stat:17,keep_topk:14,kei:[11,12],kera:17,kernel_s:[12,17],kerra:17,key_len:12,kill:[4,19],kim:8,klau:20,klein:8,know:[4,11,19],krikun:20,kwarg:12,kyunghyun:20,label0_token0:[6,21],label0_token1:[6,21],label0_tokenn0:[6,21],label1_token0:[6,21],label1_token1:[6,21],label1_tokenn1:[6,21],label2_token0:[6,21],label2_token1:[6,21],label2_tokenn2:[6,21],label:[1,6,17,21],label_smooth:[1,3,17],laid:[4,19],lambda:17,lambda_coverag:17,languag:3,lapata:20,larg:3,larger:[4,19],last:[12,15,17,18],latex:[6,21],latter:12,layer:[1,3,4,12,17,18,19],layer_cach:12,lead:2,leader:2,learn:[1,2,3,6,10,12,17,20,21],learning_r:[1,2,3,6,10,17,21],learning_rate_decai:[17,21],learning_rate_decay_fn:10,least:[0,14],leav:[11,17],legisl:[4,19],lei:20,len:[2,10,12],length:[3,10,11,12,14,15,17,18],length_averag:14,length_non:14,length_pen:14,length_penalti:[2,3,14,18],length_wu:14,less:11,let:2,level:11,liber:2,librari:[7,8,17],librosa:[11,21],libsox:21,libya:2,like:[0,3,6,14,18,21],line:[0,1,3,4,6,11,14,15,18,19,21],linear:2,linguist:[12,20],link:[0,3,6],list:[0,3,10,11,12,13,14,17],list_model:13,literatur:17,liu:[3,20],ll17:[12,20],llion:20,load:[2,10,12,13,17],load_model:13,load_pretrained_vector:12,loader:7,local:3,localhost:17,locat:11,log:[2,7,14],log_fil:[15,17,18],log_file_level:[15,17,18],log_prob:14,log_tensorboard:10,logger:14,logit:[14,18],logprob:14,logsoftmax:2,logsumexp:14,longer:[3,18],longest:14,longtensor:[10,12,14],look:[0,3,6,8,12,18,21],loop:[2,10],loss:[1,2,3,7,9,17],loss_scal:17,losscomputebas:10,love:0,low:[4,5],lower:[4,5,15],lowercas:15,lpm15:[12,20],lrb:3,lsl:[14,20],lstm:[2,3,4,6,12,17,19,21],lua:13,lukasz:20,luong:[3,12,17,20],lza17:[12,20],macherei:20,machin:[3,8,11,12,14,20],maco:3,made:[4,19],magic:14,mai:[10,11,13,14,17],main:[0,4,8,10,19],make:[0,1,3,10,11,15,17],make_shard_st:10,man:[3,20],manag:[2,10],mani:[10,14,15,17],manipul:10,manual:13,map:[10,12,14],margin:12,marian:17,mark:17,markup:6,mask:[12,14],mask_or_step:12,master:[1,4,12,17,19],master_ip:17,master_port:17,match:[3,11],math:6,matrix:[12,17],matrixtre:12,max:[10,14],max_generator_batch:[1,3,17],max_grad_norm:[1,2,3,6,10,17,21],max_len:12,max_length:[6,14,18],max_relative_posit:[12,17],max_sent_length:18,max_shard_s:15,max_siz:10,maxim:20,maximum:[3,11,15,17,18],maybe_detoken:13,maybe_token:13,mb_devic:14,mean:[1,3,4,11,12,13,15,17,18,19],meanencod:12,mechan:[3,12],member:2,memori:[12,13,14,17],memory_bank:12,memory_length:[12,14],merg:[12,17],method:[3,10,11,12,17],metric:[14,18],michael:20,might:3,mike:20,million:[4,19],mimic:1,min_length:[3,14,18],mind:1,minh:20,mini:14,minim:[1,4,19],minimum:18,minist:2,mirella:20,mirror:17,miss:11,missingdependencyexcept:11,mit:2,mitig:2,mix:11,mkdir:[1,4,5],mlp:[3,12,17,21],mmt_task1_test2016:[4,5],model1:1,model2:1,model:[2,4,5,6,7,9,11,12,14,15,21],model_acc_x_ppl_x_e13:[6,21],model_dim:12,model_dtyp:[10,17],model_id:13,model_kwarg:13,model_opt:14,model_root:13,model_sav:10,model_typ:[6,17,21],model_xyz:[4,19],modelsaverbas:10,modif:10,modifi:[0,1,3,12],modul:[0,2,7,10,14],mohammad:20,mondai:3,more:[0,1,4,6,11,14,17,19],mose:[4,5],most:[3,18],mostli:10,motion:2,move:[13,17],moving_averag:[10,17],much:17,multi30k:[4,5],multi30k_model:[4,5],multi30k_model_:[4,5],multi:[0,4,5,7,12,18,19],multiheadedattent:12,multimod:[4,5],multipl:[0,10,11,12,15,18],multplic:0,must:[1,12,13,17],n_batch:10,n_best:[14,18],n_correct:10,n_gpu:10,n_src_word:10,n_word:10,name:[0,7,11,14],namespac:[11,13,14],napoleon:0,narrow:3,nation:[4,19],natur:3,nccl:17,necessari:[0,10,17,18],need:[0,1,2,3,4,10,11,12,17,19,20],neg:[13,14,17],network:[1,3,12,20,21],neural:[3,8,12,14,20,21],neuro:20,next:[2,10,14,18],nfeat:12,ngram:18,nicht:2,niki:20,nip:3,nllloss:2,nlp:1,nmt:[10,14,17,18],nmtlosscomput:2,nmtmodel:[2,10,12,14],noam:[1,3,17,20],noamwd:17,node:[1,4,10,19],non:[12,14,17],none:[2,10,11,12,13,14,17,18],nonetyp:[11,12,14],norm:[3,12,17],norm_method:10,normal:[1,2,3,10,17],normalize_audio:11,normalz:10,norouzi:20,notabl:3,note:[0,3,4,14,19],noth:[0,10],notset:[15,17,18],now:[2,4,19],num_lay:[2,12],num_step:10,number:[1,2,3,11,12,14,17],numeric:11,numpi:11,nvidia:8,obj:[0,10],object:[0,2,10,11,13,14],octob:2,off:[3,17],offenc:2,on_timemout:13,on_timeout:13,onc:17,one2:1,one:[0,2,3,4,6,10,12,15,18,19,21],onli:[1,3,4,12,14,19],onmt:[2,10,11,12,13,14,17],open:8,opennmt:[0,1,3,6,8,10,16,21],oper:[12,14],opposit:2,opt:[10,11,12,13,14,15,18],optic:6,optim:[1,2,3,7,9,21],option:[0,1,3,7,10,12,13,14,15,17,18],ord:20,org:[4,5,8,17,20],origin:17,oriol:20,other:[10,14,17,20],otherwis:[12,17,18],our:[2,3,8,14,21],our_stat:10,out:[3,10],out_channel:12,out_fil:14,outperform:3,output:[1,2,3,4,5,6,10,12,14,15,17,18,19,21],output_fil:1,output_s:12,over:[0,1,10,12,14,17],overrid:[12,14],overridden:12,overview:7,overwrit:17,own:10,ownership:10,p17:8,p18:17,packag:11,pad:[2,10,12,14],pad_idx:12,pad_token:2,page:3,pair:[3,10,11,14],paper:[0,3,6,12,17],parallel:[3,4,12,14,17,19],parallel_path:14,param_init:[1,3,17],param_init_glorot:[1,3,17],paramet:[1,2,3,10,11,12,13,14,17,18],parameter:12,parenthes:0,parliament:[2,4,19],parmar:20,pars:[11,12,13],parse_opt:13,part:3,particular:[0,12],pass:[10,11,12,13,17],past:[0,17],path:[6,11,12,13,14,15,17,18,21],pdf:17,pen:14,penalti:[3,14,18],penaltybuild:14,per:[0,3,4,6,11,14,15,17,18,19,21],perfom:17,perform:12,perl:[3,4,5,18],perplex:[2,10],person:[4,19],peter:20,pham:[3,20],phrase_t:[14,18],piec:11,pil:11,pilat:[4,19],pillow:6,pip:[6,8,21],pipelin:11,pleas:[0,3,8],point:[3,20],pointer:[3,12,20],polit:2,polosukhin:20,polyak_decai:12,pool:[12,17],port:[1,16,17],portal:8,posit:[1,11,12,17],position_encod:[1,3,12,17],position_ffn:12,positionalencod:12,positionwisefeedforward:12,possibl:[10,12,14,15,17,18],postur:[4,19],potenti:14,ppl:[2,10],pproach:20,practic:3,pre:[1,10,13],pre_word_vecs_dec:[1,17],pre_word_vecs_enc:[1,17],pred:[2,4,5,6,18,19,21],pred_scor:14,pred_sent:14,predict:[4,10,11,14,18,19],prefer:0,prefix:[10,11,15,17],preload:13,preload_model:13,prepar:[1,4,5,15],preprint:20,preprocess:[1,2,4,5,6,7,11,17,21],prerog:[4,19],present:3,presum:14,pretrain:[7,12,17],prevent:3,previou:12,previous:3,price:3,prime:2,print:[2,14,17,18],prison:2,prob:14,probabl:[12,14,17,18],probil:12,problem:[6,14],proc:[8,20],procedur:[2,3],proceed:3,process:[3,10,11,17],produc:[11,14,21],project:[0,8,12],propag:10,propos:2,provid:[6,8,18,21],provis:[4,19],prune:7,pull_request_chk:0,punctuat:0,purpos:[4,19],pyroug:3,python:[0,1,2,3,4,5,6,17,19,21],pytorch:[0,3,8,12,21],qin:20,quarter:3,queri:12,query_len:12,quest:[4,5],quick:7,quickstart:[4,7,8],quit:[4,19],quoc:20,quot:[0,4,19],rais:11,random:[7,17],random_sampl:14,random_sampling_temp:[14,18],random_sampling_topk:[14,18],randomli:14,randomsampl:14,rank:[14,17],ranslat:20,rare:14,rate:[1,2,7,10,15,18,21],rather:[0,14],ratif:2,ratio:[14,18],raw:[11,12,14,18,21],reach:14,read:[0,2,3,4,11,13,14,19],readabl:0,reader:[2,7,14],readi:8,readm:17,rebellion:2,receiv:14,recent:17,recip:12,recognit:6,recommend:17,recommonmark:0,record:3,recurr:12,recurs:3,reduct:2,ref:0,refer:[0,7],refus:[4,19],regim:2,regist:12,regular:1,rel:[6,11,17,21],releas:3,relev:[12,14],rememb:0,remov:[2,3],render:3,renorm:[3,17],repeat:[2,3,14,18],repetit:18,replac:[14,18],replace_unk:[4,5,14,18,19],replic:[1,3,12],repo:3,report:[2,8,10,14,15,18],report_bleu:[14,18],report_everi:[2,15,17],report_manag:[2,10],report_roug:[14,18],report_scor:14,report_tim:[14,18],reportmgr:2,reportmgrbas:10,repositori:[3,8],repres:10,represent:[12,17,20,21],reproduc:17,requir:[2,4,8,10,12,17,19],rerank:14,rescor:14,research:8,reset:10,reset_optim:17,resett:17,residu:12,resourc:7,respons:10,rest:16,restrict:18,result:[1,3,11,17],return_attent:14,return_hidden:12,reus:[3,12,17],reuse_copy_attn:[3,12,17],reveng:2,revok:2,rico:20,right:0,rip:[4,19],rnn:[2,10,12,17,20],rnn_dropout:12,rnn_size:[1,2,3,12,17],rnn_type:[2,12,17,21],rnndecoderbas:12,rnnencod:[2,12],roblem:20,root:8,roug:[3,14,18],rrb:3,rsqrt:17,rst:0,run:[0,1,2,3,4,10,12,13,17,18,19],rush:[3,8],russia:2,sai:[4,19],same:[0,1,3,12,13,17],sampl:[6,7,14,15,17,21],sample_r:[11,12,15,17,18,21],sample_with_temperatur:14,sampling_temp:14,save:[2,4,10,14,15,17,18,19],save_checkpoint_step:[1,10,17],save_config:[15,17,18],save_data:[1,3,4,5,6,15,19,21],save_model:[1,3,4,5,6,17,19,21],saver:10,scale:[12,14,17],schedul:10,schuster:20,score:[2,7,12,18],scorer:[2,14],script:[0,1,3,4,5,7],sea:[6,21],search:[0,3,4,14,18,19],sebastian:3,sebastiangehrmann:3,sec:2,second:[1,2,11,12,13,15,17,18,21],section:[3,4,19],sed:[3,4,5],see:[3,6,11,12,13,14,17,20],seed1:1,seed2:1,seed:[3,14,15,17,18],seemingli:17,segment:[15,18],select:[12,14,17],select_indic:14,self:[12,13,14,17],self_attn_typ:[12,17],send:[0,17],senellart:8,senior:[4,19],sennrich:20,sensibl:0,sensit:1,sent:[2,4,10,17],sent_numb:14,sent_tag_verbatim:3,sentenc:[1,2,3,4,5,11,14,15,18,19],separ:[4,12,17,19],seq:14,seq_len:[12,14],seqlength:12,sequenc:[3,10,11,12,13,14,15,17,18,20],sequenti:2,serial:12,server:[7,17],servermodel:13,servermodelerror:13,set:[1,2,3,4,10,12,13,14,17,18,19],setup:[1,12],seven:2,sever:[1,12,14],sgd:[2,3,17],sh16:[12,20],shall:[6,21],shape:[0,12,14],shard:[10,15,18],shard_siz:[3,6,10,15,18,21],share:[1,3,15,17,18],share_decoder_embed:17,share_embed:[3,17],share_vocab:[3,15,18],sharpli:3,shazeer:20,shef:[4,5],shortest:14,should:[3,4,11,12,14,19],show:3,shrunk:3,shuffl:15,sich:2,side:[3,11,14,17],sie:2,signatur:11,silent:12,similar:[3,12,17],simpl:[3,4,10,12,19],simpli:12,simulatan:12,sin:17,sinc:[3,12,14],singl:[0,4,13,17,19],single_pass:17,sinusoid:[1,12],size:[2,3,10,11,12,14,15,17,18,21],skip_lin:1,sleep:[4,19],slightli:1,slm17:[12,20],slow:18,small:[2,4,19],smaller:[15,17,18],smooth:[1,17],soar:3,softmax:[12,17,18],soldier:[4,19],some:[0,2,4,10,18,19],someth:0,sometim:0,sort:11,sort_kei:11,sourc:[0,2,3,4,6,8,10,11,12,13,14,15,17,18,19,21],sox:21,space:[0,4,19],spars:12,sparseadam:17,sparsemax:[12,17],spec:12,special:[1,2],specif:[3,11,17],specifi:[1,2,12,17,18],spectrogram:[11,15,17,18,21],speech0_path:21,speech1_path:21,speech2_path:21,speech:7,sphinx:0,sphinx_rtd_them:0,sphinxcontrib:0,spill:0,split:3,src:[1,2,3,4,5,6,10,11,12,13,14,15,17,18,19,21],src_copu:15,src_corpu:15,src_dir:[6,11,14,15,18,21],src_len:[10,12],src_map:12,src_pad:2,src_raw:14,src_reader:[2,14],src_seq_length:[3,15],src_seq_length_trunc:[3,15],src_text_field:2,src_vocab:[2,11,14,15],src_vocab_s:15,src_word_vec_s:17,src_words_min_frequ:15,sru:[7,17],stack:[12,17],stand:0,standard:[3,12,17],stanford:1,start:[2,7,10,13,17],start_decay_step:17,start_tim:2,stat:[10,17],stat_list:10,state:[3,10,12,14,17],state_dict:17,statist:10,statmt:[4,5],statu:15,std:11,stdout:10,stdrnndecod:12,step:[2,3,4,5,7,10,12,14,17,18],stepwis:12,stepwise_penalti:[3,14,18],stft:[11,21],still:0,stoi:2,stop:[14,17,18],store:[6,11,21],stori:2,str2reader:2,str:[0,10,11,12,13,14],strategi:[7,10],streamreaderwrit:14,stretch:[4,19],stride:[11,12,15,18,21],string:[10,12,18],strip:3,structur:[7,11,20],structured_attent:12,style:[0,12,17],styleguid:0,su4:18,sub:3,subclass:[10,12,14],submodul:3,subtract:11,sudo:21,suggest:[1,17],sum:[2,10,12,14,17],sum_:12,sume:10,summar:[4,7,19,20],summari:[0,3,4,14,18],superclass:0,support:[0,2,7,12,17],sure:[1,3],surround:3,suspicion:2,sutskev:20,system:[6,11,14,17,20,21],tabl:[3,12,18],tag:3,take:[4,6,8,12,17,18,19],taken:12,tanh:12,tao:20,taolei87:12,tar:[4,5,6,21],target:[2,3,4,10,12,14,15,17,18,19],task:[4,5],technic:[6,8],temperatur:14,tensor:[0,10,11,12,14],tensorboard:[10,17],tensorboard_log_dir:17,tensorboard_writ:2,tensorboardx:17,tensorflow:[3,17],term:[4,12,19],terribl:[4,19],test2016:[4,5],test:[0,2,3,4,5,6,12,19],test_roug:18,testout:3,text:[2,4,7,10,11,12,14,15,17,18,20],textdataread:[11,14],textio:14,textmultifield:11,tgt:[1,2,3,4,5,6,10,11,12,14,15,17,18,19,21],tgt_corpu:15,tgt_dict:12,tgt_len:[10,12],tgt_pad:2,tgt_reader:[2,14],tgt_sent:14,tgt_seq_length:[3,6,15],tgt_seq_length_trunc:[3,15],tgt_text_field:2,tgt_vocab:[2,10,15],tgt_vocab_s:15,tgt_word_vec_s:17,tgt_words_min_frequ:[6,15],tgz:[6,21],than:[0,3,4,14,17,19],thang:20,thei:[4,12,14,19],them:[4,11,12,19],theorem:12,thi:[0,1,2,3,4,5,6,8,10,11,12,14,15,17,18,19,21],thin:10,thing:0,thoroughli:12,those:11,three:12,through:[2,10],throughout:[6,21],thu:10,tic:0,tick:0,time:[10,14,17,18,21],timeout:13,timer:13,titl:[3,8],tlen:12,tmp:1,to_cpu:13,to_gpu:13,todai:2,todo:12,toi:[6,21],tok:[2,13],token:[1,3,4,5,6,10,11,12,13,14,17,18,19,21],tokenizer_opt:13,told:[4,19],too:14,tool:[0,1,4,5,18],toolkit:8,top:[6,12,14,21],top_beam_finish:14,topk:14,topk_id:14,topk_log_prob:14,topk_scor:14,torch:[0,1,2,10,12,14,17],torch_optim:2,torchaudio:[11,21],torchtext:[2,10,11,14],torchvis:[6,11],total:[10,14,17],track:2,traget:1,trail:0,train:[1,2,4,5,6,7,8,10,12,15,18,20,21],train_data_fil:2,train_from:17,train_it:[2,10],train_loss:[2,10],train_src:[1,3,4,5,6,15,19,21],train_step:[1,2,3,10,17,21],train_tgt:[1,3,4,5,6,15,19,21],trainabl:10,trainer:[2,4,7,9,19],training_step:10,tran:2,trans_batch:2,transform:[3,7,17,20,21],transformer_ff:[1,17],transformerdecod:12,transformerencod:12,translat:[1,2,3,4,6,7,8,10,11,12,13,16,20,21],translate_batch:[2,14],translation_serv:13,translationbuild:[2,14],translationserv:13,travi:0,tree:12,trial:2,trick:12,trigram:3,trivial:12,troubl:3,trunc_siz:10,truncat:[3,10,11,15,17],truncated_decod:17,ttention:20,tupl:[11,14],turn:[3,11,12,17],tutori:8,two:[4,12,19],txt:[1,2,3,4,6,8,18,19,21],tymoshenko:2,type:[0,1,3,7,10,11,12,13,14,15,18,21],typic:[3,10,17],u_a:12,ukrain:2,under:[15,17,18],underli:14,uniform:17,union:0,unit:[4,12,19],unittest:0,unk:[2,18],unknown:14,unlimit:11,unload:13,unload_model:13,unmodifi:14,unnecessari:0,unnorm:12,until:14,unzip:1,updat:[1,2,10,13,14,17],update_finish:14,update_global_st:14,update_learning_r:17,update_n_src_word:10,update_scor:14,upon:2,url:[8,20],url_root:16,usag:[1,15,16,17,18],usagecomplet:1,use:[0,2,3,4,7,8,10,11,12,13,14,15,17,18,19,21],use_bridg:12,use_relu:12,use_tanh:12,used:[3,4,6,10,11,12,14,17,19],useful:10,user:[10,12,13],uses:[0,3,4,5,12,14,17],using:[0,1,3,8,12,13,14],usr:3,usual:[4,11,19],uszkoreit:20,util:[2,10],v_a:12,val:[2,3,4,5,6,19,21],valid:[1,2,3,4,5,10,15,17,19],valid_batch_s:[3,17],valid_data_fil:2,valid_it:[2,10],valid_loss:[2,10],valid_src:[1,3,4,5,6,15,19,21],valid_step:[1,2,10,17],valid_tgt:[1,3,4,5,6,15,19,21],valu:[1,3,10,11,12,13,14,15,17,18],variabl:[11,14],variat:0,varieti:6,vaswani:20,vaswanispujgkp17:0,vector:[12,14,17],verbos:[1,3,4,5,6,14,18,19,21],verdict:2,veri:[0,1,11,18],version:[1,3,12,13],via:[12,17,20],victori:2,view:[11,14],vinyal:[3,20],visibl:[1,19],visit:0,visual:[6,17],vocab:[1,2,7,10,11,12,14],vocab_field:2,vocab_s:[14,17],vocab_size_multipl:15,vocabulari:[1,2,10,12,15,17,18],vote:2,vsp:[12,20],w_a:12,wait:14,want:[1,4,18,19],warmup:17,warmup_step:[1,3,17],warn:[15,17,18],websit:3,weight:[12,17,18],weightnormconv2d:12,well:[0,3,17],west:2,wget:[1,4,5,6,21],what:[1,2,6,10,13],when:[0,3,8,11,12,14,17,18],where:[11,12,14,17],wherea:17,whether:[10,11,13,14],which:[2,3,4,11,12,14,17,19],whose:[4,11,18,19],wiki:17,wikipedia:17,window:[11,15,17,18,21],window_s:[11,12,15,17,18,21],window_strid:[11,15,18,21],within:[2,12],without:[0,3,12,17],wmt16:[4,5],wmt16_files_mmt:[4,5],wmt17_files_mmt:[4,5],wmt:[1,4,5],wojciech:20,wolfgang:20,word2vec:1,word:[2,3,11,12,14,15,17,18],word_lut:12,word_padding_idx:[2,12],word_vec_s:[1,3,6,12,17],word_vocab_s:12,work:[0,3,4,6,8,14,17,19,21],workflow:8,world_siz:[1,3,4,17,19],would:[2,17],wrap:13,wrapper:[2,3,10],write:10,writer:10,wsc:[14,20],www:[4,5,17],xavier_uniform:17,xent:[2,10],xiong:20,yang:20,yann:20,yarat:20,year:[2,3,8],yet:[2,12,14],yield:11,ylhsieh:1,yml:0,yoav:20,yonghui:20,yoon:8,yoshua:20,you:[0,3,4,6,7,8,12,17,18,19,20],your:[0,1,3],yourself:8,yuan:20,yulia:2,yuntian:[3,8],zaremba:20,zero:[10,12,14,17,18],zero_grad:10,zhang:20,zhifeng:20,zip:1,zxf:[6,21],zxs18:[12,20]},titles:["Contributors","FAQ","Library","Summarization","&lt;no title&gt;","Translation","Image to Text","Contents","Overview","onmt","Framework","Data Loaders","Modules","Server","Translation","Preprocess","Server","Train","Translate","Quickstart","References","Speech to Text"],titleterms:{"class":14,acknowledg:21,addit:8,altern:12,architectur:12,argument:[15,16,17,18],attent:[12,17],beam:18,can:1,citat:8,cnn:3,content:7,contributor:0,conv2conv:12,copi:12,core:[12,13],data:[3,11,15,18,19],dataset:11,decod:[12,14,17],depend:[6,21],docstr:0,effici:18,embed:[1,17],encod:[12,17],ensembl:1,evalu:3,faq:1,featur:17,framework:10,gener:17,gigaword:3,glove:1,gpu:1,guidelin:0,how:1,imag:6,infer:[1,3],initi:17,instal:8,librari:2,loader:11,log:[15,17,18],loss:10,model:[1,3,10,13,17,18,19],modul:12,multi:1,name:[15,16,17,18],onmt:9,optim:[10,17],option:[6,21],overview:8,preprocess:[3,15,19],pretrain:1,prune:15,quick:[6,21],quickstart:19,random:[15,18],rate:17,reader:11,refer:[3,20],resourc:8,sampl:18,score:[3,14],server:[13,16],speech:[15,17,18,21],sru:12,start:[6,21],step:19,strategi:14,structur:12,summar:3,support:1,text:[6,21],train:[3,17,19],trainer:10,transform:[1,12],translat:[5,14,18,19],type:17,use:1,vocab:15,you:1}})