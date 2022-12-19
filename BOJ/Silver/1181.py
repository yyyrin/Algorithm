# [BOJ] 1181. 단어 정렬
# 길이 정렬 -> 사전순 정렬 : 길이대로 정렬한 부분이 reset!
# 사전순 정렬 -> 길이 정렬 : correct!!!

n = int(input())   # 단어의 개수
word = list(input() for _ in range(n))  # 문자를 입력받아 list에 저장

# 중복을 허용하지 않는 set의 특성 이용 -> 중복 제거
set_word = list(set(word))  # set -> list로 묶어주기

sort_word = []      # 순서를 정렬해서 저장할 list
for i in set_word:  # (문자의 길이, 문자)로 저장하기
    sort_word.append((len(i), i))

result = sorted(sort_word)  # 앞에 있는 숫자와 뒤에 있는 문자가 순서대로 자동 정렬

for len_word, word in result:  # result에 2개의 매개변수가 있으므로
    print(word)                # 필요한 문자만 출력

#--------------------------------
## 시간 초과.. ##

# N = int(input())  # 단어의 개수
# words = list(set(input() for _ in range(N)))
# # words = list(input() for _ in range(N))
# n = len(words)
# for i in range(n-1):
#     min_len = 50
#     min_idx = i
#     for j in range(i, n):
#         if len(words[j]) < min_len:
#             min_len = len(words[j])
#             min_idx = j
#     words[i], words[min_idx] = words[min_idx], words[i]
#
# for k in range(len(words)):
#     print(words[k])

