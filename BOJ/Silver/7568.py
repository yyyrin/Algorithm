# [BOJ] 7568. 덩치




#----------------------------------
# N = int(input())  # 전체 사람 수
#
# lst = [list(map(int, input().split())) for _ in range(N)]
# rank_list = []   # 등수 저장 리스트
#
# for i in range(N):
#     rank = 1
#     for j in range(N):
#         if lst[i][0] < lst[j][0] and lst[i][1] < lst[j][1]:
#             rank += 1
#     rank_list.append(rank)
#
# print(*rank_list)